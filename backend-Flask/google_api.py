import pathlib
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
import google.auth.transport.requests
from pip._vendor import cachecontrol
import requests
import os
from flask import Flask, session, request, redirect, abort
from config import CLIENT_ID, CLIENT_SECRET


#################### Google app ########################
app = Flask(__name__)
app.secret_key = CLIENT_SECRET # make sure this matches with that's in client_secret.json

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1" # to allow Http traffic for local dev

GOOGLE_CLIENT_ID = CLIENT_ID
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "client_secret.json")

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"],
    redirect_uri="http://127.0.0.1:8000/callback"
)


#################### Google Routes ########################

@app.route("/login")
def login():
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return redirect(authorization_url)


@app.errorhandler(401)
def handle_unauthorized_error(e):
    return "Authorization required.", 401

@app.route("/callback")
def callback():
    flow.fetch_token(authorization_response=request.url)

    if not session["state"] == request.args["state"]:
        abort(500)  # State does not match!

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID
    )
     # get the user credintials from google auth

    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    session["email"] = id_info.get("email")
    name = session["name"]
    email = session["email"]
    google_id = session["google_id"]
    # store the users' creditionals in a dictionary
    userDics = {}
    userDics['name'] = name
    userDics['email'] = email
    userDics['google_id'] = google_id
    if (name):
        return userDics
        
    return redirect("/dashboard")
