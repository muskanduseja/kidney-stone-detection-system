from datetime import timedelta

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///users.db'  # Path to your database
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'your-very-secure-secret-key-123'  # Change this for security
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    UPLOAD_FOLDER = 'uploads'  # Folder to save uploaded files
