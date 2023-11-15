from flask import Blueprint, request
from ..services.auth_service import register_user, login_user, logout_user
from flask_jwt_extended import jwt_required

auth_blueprint = Blueprint('auth', __name__)


# handle authentication routes

@auth_blueprint.route('/login', methods=["POST"])
def login():
    """handle the login post request"""
    email = request.json["email"]
    password = request.json["password"]
    response = login_user(email, password)
    return response


@auth_blueprint.route('/signup', methods=["POST"])
def register():
    """handle the register post request"""
    email = request.json["email"]
    fullname = request.json["fullname"]
    password = request.json["password"]
    response = register_user(email, fullname, password)
    return response


@auth_blueprint.route('/logout', methods="POST")
@jwt_required()
def logout():
    """handle the logout POST request"""
    response = logout_user()
    return response
