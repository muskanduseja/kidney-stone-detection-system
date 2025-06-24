import os
from flask_sqlalchemy import SQLAlchemy
from tensorflow.keras.models import load_model

# Initialize the database object
db = SQLAlchemy()

# User Model for SQLAlchemy
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

# Function to load the ML models
def load_ml_models():
    try:
        print("📦 Loading ML models...")
        VGG_model_binary = load_model('VGG_model_binary_final.h5')  # Path to your model
        VGG_model_multi = load_model('VGG_model_multi_final.h5')  # Path to your model
        print("✅ Models loaded successfully.")
        return VGG_model_binary, VGG_model_multi
    except Exception as e:
        print(f"❌ Failed to load models: {e}")
        return None, None
