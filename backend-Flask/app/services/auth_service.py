
from flask import jsonify
from ..models.users import User
from ..models import db
from .api import email_validator_service
from . import bcrypt
import os



def register_user(email, fullname, password):
    """Register a user to the DB"""
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
    
    secret_api_key = os.environ.get("ABSTRACT_API_KEY")
    is_email_valid = email_validator_service.check_email_isvalid(secret_api_key, email)
    if is_email_valid:
        hashed_password = bcrypt.generate_password_hash(password)
        
        # create a new user
        new_user = User(fullname=fullname, email=email,
                        password=hashed_password)
   
        #  Add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        # return a response to the client with success response
        return jsonify({
                "id": new_user.id,
                "email": new_user.email,
                "fullname": new_user.fullname
            }), 200
    else:
        return jsonify({"email": "The email is not valid"}), 409






