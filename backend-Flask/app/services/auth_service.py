
from flask import jsonify, session
from ..models.users import User
from ..models import db
from .api import email_validator_service
from . import bcrypt
import os
from password_strength import PasswordPolicy
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager



def valid_password(password):
    """Check the strength of the password"""
    policy = PasswordPolicy.from_names(
        length=6,     # minimum length: 6 characters
        uppercase=1,  # need min.  uppercase letters
        numbers=1,    # need min.  digits
        special=1,    # need min.  special characters
    )

    # Check the password against the policy
    password_strength = policy.test(password)

    if len(password_strength) == 0:
        feedback = "Password is strong"
    else:
        feedback = "Password is weak"
    return feedback


def register_user(email, fullname, password):
    """Register a user to the DB"""
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    secret_api_key = os.environ.get("ABSTRACT_API_KEY")
    is_email_valid = email_validator_service.check_email_isvalid(
        secret_api_key, email)

    if is_email_valid:

        # check password strength
        is_password_valid = valid_password(password)
        if (is_password_valid == "Password is weak"):
            return jsonify({"error": "Password is weak"}), 403

        # create a new user
        hashed_password = bcrypt.generate_password_hash(password)
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
    

def login_user(email, password):
    """Login a user"""
    
    # Forget any user_id
    session.clear()

    # retrieve the registered user from the db
    current_user = User.query.filter_by(email=email).first()
    
    # check the password is not matched or current user is uncorrect 
    if not current_user or not bcrypt.check_password_hash(current_user.password, password):
        return jsonify({"error": "Wrong email or passwords"}), 401
    
    # create an access token
    access_token = create_access_token(identity=email)

    # Remember which user has logged in
    session["user_id"] = current_user.id

    # return a success response and the access_token
    return jsonify({
        "fullname": current_user.fullname,
        "email": email,
        "access_token": access_token
    }), 200

def logout_user():
    """Logout the user"""
    session.clear()
    return jsonify({"msg": "logout successful"}), 200;

