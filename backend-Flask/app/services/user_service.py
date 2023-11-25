from flask import jsonify, session
from . import User, db, bcrypt
from .auth_service import valid_password



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


def delete_current_user():
    """Delete a user from db"""
    current_user_id = session["user_id"]
    # retrieve current user
    current_user = User.query.filter_by(id=current_user_id).first()
    if (current_user.id == current_user_id):
        # delete current user & save changes
        db.session.delete(current_user)
        db.session.commit()
        return jsonify({
            "success": "The user has been deleted"
        }), 200
    else:
        return jsonify({
            "error": "The user has not been deleted successfully"}), 409


def change_user_password(email, old_password, new_password, confirm_new_password):
    """Change a user password"""
    current_user = User.query.filter_by(email=email).first()
    if current_user and bcrypt.check_password_hash(current_user.password, old_password):
        if new_password == confirm_new_password:
            # check password strength
            is_password_valid = valid_password(new_password)
            if (is_password_valid == "Password is weak"):
                return jsonify({"error": "Password is weak"}), 403
            current_user.password = bcrypt.generate_password_hash(new_password)
            #save changes
            db.session.commit()
            return jsonify({
                "success": "The password has changed successfully"
            }, 200)

        else:
            return jsonify({
                "error": "The password doesn't match the confirmed password"
            }, 409)
    else:
        return jsonify({
            "error": "The email or the current password doesn't match"
        }, 409)
