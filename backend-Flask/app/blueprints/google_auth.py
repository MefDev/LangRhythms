"""Handle google api authentification blueprints and routes"""
from flask import Blueprint, redirect
from . import auth_google_service 

google_auth_blueprint = Blueprint('api/google', __name__)
@google_auth_blueprint.route("auth/login")
def redirect_to_google_page():
    """Redirect to google login page"""
    authorization_url =  auth_google_service.google_user_login()
    return redirect(authorization_url)

@google_auth_blueprint.route("/callback")
def google_login():
    """handle the google login Get response"""
    response = auth_google_service.handle_google_login()
    return response

@google_auth_blueprint.errorhandler(401)
def handle_unauthorized_error(e):
    return "Authorization required.", 401

   