
import os
from flask import Flask, request, jsonify, send_from_directory
from flask_jwt_extended import JWTManager, jwt_required
from flask_cors import CORS
from models import db, load_ml_models, User  # Import db and User model from models.py
from auth import register, login  # Ensure auth.py file is in place
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np

# Initialize the Flask application
app = Flask(__name__)

# Initialize the JWTManager
jwt = JWTManager(app)

# CORS setup (allows all origins to access the API)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configurations (import configuration from config.py)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Set your database URI here
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Optional, but recommended
app.config['UPLOAD_FOLDER'] = os.path.join(os.getcwd(), 'uploads')
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Max file size (16 MB)
app.config.from_object('config.Config')
db.init_app(app) 
# Load ML models
VGG_model_binary, VGG_model_multi = load_ml_models()

# Prediction Pipeline Function
def predict_pipeline_vgg(image_path):
    if not VGG_model_binary or not VGG_model_multi:
        print("Models not loaded")  # Debugging line
        return "Models not loaded", 500

    try:
        # Load and preprocess the image
        print(f"Loading image: {image_path}")  # Debugging line
        img = load_img(image_path, target_size=(224, 224))
        img_array = img_to_array(img) / 255.0  # Normalize the image
        img_array = np.expand_dims(img_array, axis=0)

        # Get binary prediction (Normal or Abnormal)
        binary_pred = VGG_model_binary.predict(img_array)[0][0]
        print(f"Binary prediction result: {binary_pred}")  # Debugging line

        # If abnormal, get multi-class prediction (Cyst, Stone, Tumor)
        if binary_pred > 0.5:
            multiclass_pred = VGG_model_multi.predict(img_array)[0]
            class_idx = np.argmax(multiclass_pred)
            class_labels = {0: 'Cyst', 1: 'Stone', 2: 'Tumor'}
            print(f"Multiclass prediction: {class_labels.get(class_idx, 'Unknown')}")  # Debugging line
            return {
                'binary_prediction': 'Abnormal',
                'multiclass_prediction': class_labels.get(class_idx, 'Unknown')
            }
        else:
            print("Prediction: Normal")  # Debugging line
            return {'binary_prediction': 'Normal', 'multiclass_prediction': None}
    except Exception as e:
        print(f"Prediction error: {str(e)}")  # Debugging line
        return {'error': str(e)}, 500

# Routes
@app.route('/register', methods=['POST'])
def register_user():
    return register()

@app.route('/login', methods=['POST'])
def login_user():
    return login()

@app.route('/predict', methods=['POST'])
# @jwt_required()  # Uncomment this if you require JWT for this route
def predict():
    # Check if the request contains a file
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    # If no file is selected
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Save the uploaded file to the 'uploads' folder
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)

    # Get the prediction result using both models
    result = predict_pipeline_vgg(filepath)

    print(f"Prediction result: {result}")  # Debugging line

    return jsonify({
        'result': result,
        'image_url': f'/uploads/{file.filename}',
        'status': 'success'
    }), 200


# Serve uploaded files (images)
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=False, port=5003, host='0.0.0.0')

