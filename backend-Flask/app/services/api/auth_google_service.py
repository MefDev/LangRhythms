
from flask import session, request, abort, jsonify
import requests
from pip._vendor import cachecontrol
import os
import pathlib
from google_auth_oauthlib.flow import Flow
import google.auth.transport.requests
from google.oauth2 import id_token

from flask_jwt_extended import create_access_token, create_refresh_token, set_refresh_cookies, set_access_cookies
from . import db, User, bcrypt


def get_flow():
    # to allow Http traffic for local dev
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    client_secrets_file = os.path.join(
        pathlib.Path(__file__).parent, "client_secret.json")

    flow = Flow.from_client_secrets_file(
        client_secrets_file=client_secrets_file,
        scopes=["https://www.googleapis.com/auth/userinfo.profile",
                "https://www.googleapis.com/auth/userinfo.email", "openid"],
        redirect_uri="http://127.0.0.1:5000/api/google/callback"
    )
    return flow


flow = get_flow()


def google_user_login():
    """Authenticate the user with google 3rd paty api"""

    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return authorization_url


def handle_google_login():
    """handle the core logic"""

    GOOGLE_CLIENT_ID = os.environ.get("CLIENT_ID")
    flow.fetch_token(authorization_response=request.url)
    if not session["state"] == request.args["state"]:
        abort(500)  # State does not match!

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(
        session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials.id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID
    )

    # get the user credentials from google auth
    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    session["email"] = id_info.get("email")

    # store the user credentials
    user_credentials = {
        "fullname": session["name"],
        "email": session["email"],
        "google_id": session["google_id"]
    }
    if session["google_id"] and session["name"] and session["email"]:

        # create an access token and refresh token
        access_token = create_access_token(identity=session["email"])
        refresh_token = create_refresh_token(identity=session["email"])

        # Create a JWT access token
        user_credentials["access_token"] = access_token

        # retrieve email and fullname from 3rd party api google Auth
        email = id_info.get("email")
        fullname = id_info.get("name")

        user_exists = User.query.filter_by(email=email).first()
        # check if email not exist in our database
        if not user_exists:
            # create a new user
            hashed_password = bcrypt.generate_password_hash("google_auth")
            new_user = User(fullname=fullname, email=email,
                            password=hashed_password, invalidated_tokens="")
            #  Add the new user to the database
            db.session.add(new_user)
            db.session.commit()

        # set the JWT cookies in the response
        resp = jsonify({'login': True})
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)

        # return a successful response with the populated object
        return jsonify(user_credentials), 200

    # if error occurs return an error response with corresponding error status code
    return jsonify({"error": 'the credentials are uncorrect'}), 401
