from flask import request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from models import db, User

bcrypt = Bcrypt()

# Register Route
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not all([username, email, password]):
        return jsonify({'message': 'All fields are required'}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered'}), 409

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

# Login Route
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()  # Check if user exists
    if not user or not bcrypt.check_password_hash(user.password, password):  # Verify password
        return jsonify({'message': 'Invalid email or password'}), 401  # Unauthorized

    # If email and password are correct, create JWT token
    token = create_access_token(identity=user.email, additional_claims={'username': user.username})
    return jsonify({'access_token': token, 'username': user.username, 'email': user.email}), 200
#