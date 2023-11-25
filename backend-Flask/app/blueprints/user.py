"""Handle user retrieval blueprint and routes"""
from flask import Blueprint
users_blueprint = Blueprint('users', __name__)
from . import user_service

@users_blueprint.route('/')
def get_all_users():
    """Retrieve all the users from the DB"""
    response = user_service.retrieve_users_data()
    return response


@users_blueprint.route('/<int:id>')
def get_user(id):
    response = user_service.retrieve_user_data(id)
    return response

