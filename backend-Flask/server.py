

from flask import Flask, session, abort, redirect, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_session import Session
import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

from models import db, User
from config import SECRET_KEY


# Configure application
app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)

 
app.config['SECRET_KEY'] = SECRET_KEY
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
# Databse configuration  Mysql                            Username:password@hostname/databasename
#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:''@localhost/flaskreact'
 
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

#################### Database Config ########################


jwt = JWTManager(app)
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
bcrypt = Bcrypt(app)    
db.init_app(app)
with app.app_context():
    db.create_all()




# Limit the access to certain features
def login_is_required(function):
    def wrapper(*args, **kwargs):
        if "google_id" not in session:
            return abort(401)  # Authorization required
        else:
            return function()

    return wrapper

#################### NORMAL Routes ########################

@app.route('/logintoken', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
  
    user = User.query.filter_by(email=email).first()
    #if email != "test" or password != "test":
    #    return {"msg": "Wrong email or password"}, 401
    if user is None:
        return jsonify({"error": "Wrong email or passwords"}), 401
      
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
    access_token = create_access_token(identity=email)
    #response = {"access_token":access_token}
  
    return jsonify({
        "email": email,
        "access_token": access_token
    })
    #return response

@app.route("/signup", methods=["GET", "POST"])
def signup():
    email = request.json["email"]
    name = request.json["name"]
    password = request.json["password"]
   
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"error": "Email already exists"}), 409
       
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(name=name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
   
    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "name": new_user.name
    })
 
@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

@app.route("/logout")
def logout():
    session.clear()
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return redirect("/")

#@app.route("/dashboard")
#@login_is_required
#def dashboard():
#    return f"Hello {session['name']}!"


if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)