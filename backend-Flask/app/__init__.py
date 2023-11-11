from flask import Flask
from .blueprints.auth import auth_blueprint
from .blueprints.docs import docs_blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session 
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from datetime import timedelta
from .config.initial_config import APP_SECRET_KEY, JWT_SECRET_KET

def create_app():
    """Initialize the app"""
    app = Flask(__name__)
    app.config['SECRET_KEY'] = APP_SECRET_KEY
    
    # Bcrypt configuration
    bcrypt = Bcrypt(app) 
    
    # database(SQLAlchemy) configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///langrythms.db'
    db = SQLAlchemy()
    db.init_app(app)

    # session configuration
    app.config['SESSION_PERMANENT'] = True
    app.config['SESSION_TYPE'] = 'filesystem'
    app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=1)

    # AWJ configuration
    app.config["JWT_SECRET_KEY"] = JWT_SECRET_KET
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
    jwt = JWTManager(app)

    # Start a session
    server_session = Session(app)
    server_session.init_app(app)


    # Regiter the auth bluepritn
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    app.register_blueprint(docs_blueprint, url_prefix='/docs')
    return app
