from flask import Blueprint, redirect
from ..services.api.auth_google_service import google_user_login, handle_google_login

google_auth_blueprint = Blueprint('api/google', __name__)
@google_auth_blueprint.route("auth/login")
def redirect_to_google_page():
    """Redirect to google login page"""
    authorization_url =  google_user_login()
    return redirect(authorization_url)

@google_auth_blueprint.route("/callback")
def google_login():
    """handle the google login Get response"""
    response = handle_google_login()
    return response

   