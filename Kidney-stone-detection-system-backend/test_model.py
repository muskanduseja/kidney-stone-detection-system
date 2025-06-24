from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np

# Load the model
model = load_model('VGG_model_binary_final.h5')  # Ensure the model is loaded correctly

# Load and preprocess the image
img = load_img("test.jpg", target_size=(224, 224))  # Replace with actual image path
img_array = img_to_array(img) / 255.0  # Normalize the image
img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

# Make prediction
prediction = model.predict(img_array)
print("Prediction:", prediction)

# Output result based on threshold
if prediction[0][0] > 0.5:
    print("Abnormal (Kidney Stone Detected)")
else:
    print("Normal")
