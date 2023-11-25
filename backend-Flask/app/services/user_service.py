from . import User
from flask import jsonify


def get_populated_users():
    """Return a list of users"""
    user_data = []
    # query the all users data
    users = User.query.all()
    if users:
        # format the data returned as json
        for id, user in enumerate(users):
            current_user = {"id": id, "userId": user.id,
                            "fullname": user.fullname, "email": user.email}
            user_data.append(current_user)
        return user_data
    else:
        return []


def retrieve_users_data():
    """Retreive the all users data from the current database"""
    user_data = get_populated_users()
    if len(user_data) > 0:
        return jsonify({"data": user_data}), 200
    else:
        return jsonify({"error": "an error has accured while fetching data"}), 404


def retrieve_user_data(id):
    """Retreive a particular user data from the current database"""
    users = get_populated_users()
    # format data
    current_data = {"data": users}
    if (users):
        length = len(current_data["data"]) - 1
    else:
        return jsonify({"error": "an error has accured while fetching data"}), 404
    
    if (int(id) <= length):
        # retrieve a particular user
        current_user = current_data["data"][int(id)]
        return jsonify(current_user), 200
    else:
        error = {"error": "Unknown user id, try a different one"}
        return jsonify(error), 404
