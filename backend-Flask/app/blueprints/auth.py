"""Handle Authentication blueprints and routes"""
from flask import Blueprint, request
from flask_jwt_extended import jwt_required
from . import auth_service

auth_blueprint = Blueprint('auth', __name__)


@auth_blueprint.route('/login', methods=["POST"])
def login():
    """handle the login post request"""
    email = request.json["email"]
    password = request.json["password"]
    response = auth_service.login_user(email, password)
    return response


@auth_blueprint.route('/signup', methods=["POST"])
def register():
    """handle the register post request"""
    email = request.json["email"]
    fullname = request.json["fullname"]
    password = request.json["password"]
    response = auth_service.register_user(email, fullname, password)
    return response


@auth_blueprint.route('/logout', methods=["POST"])
@jwt_required()
def logout():
    """handle the logout POST request"""
    response = auth_service.logout_user()
    return response
