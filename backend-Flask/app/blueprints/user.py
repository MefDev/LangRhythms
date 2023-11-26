"""Handle user retrieval blueprint and routes"""
from . import user_service
from flask import Blueprint, request
from flask_jwt_extended import jwt_required
users_blueprint = Blueprint('users', __name__)


@users_blueprint.route('/')
def get_all_users():
    """Retrieve all the users from the DB"""
    response = user_service.retrieve_users_data()
    return response


@users_blueprint.route('/<int:id>')
def get_user(id):
    """Get a particular user from DB"""
    response = user_service.retrieve_user_data(id)
    return response


@users_blueprint.route('/delete', methods=["DELETE"])
@jwt_required()
def delete_user():
    """Delete a user from DB"""
    response = user_service.delete_current_user()
    return response


@users_blueprint.route('/password', methods=["POST"])
@jwt_required()
def update_user_password():
    """Update the user password"""
    email = request.json["email"]
    old_password = request.json["old_password"]
    new_password = request.json["new_password"]
    confirm_new_password = request.json["confirm_new_password"]
    response = user_service.change_user_password(
        email, old_password, new_password, confirm_new_password)
    return response
