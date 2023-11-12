from flask import Blueprint, render_template, request
from ..services.auth_service import register_user

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login')
def login():
    
    return render_template('auth/login.html')

@auth_blueprint.route('/register', methods=["POST"])
def register():
    """handle the register post request"""
    email = request.json["email"]
    fullname = request.json["fullname"]
    password = request.json["password"]
    response = register_user(email, fullname, password)
    return response

    