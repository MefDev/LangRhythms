from flask import Flask
from .blueprints.auth import auth_blueprint
from .blueprints.docs import docs_blueprint
from .blueprints.google_auth import google_auth_blueprint
from flask_session import Session 
from datetime import timedelta
from .config.initial_config import APP_SECRET_KEY, JWT_SECRET_KET
from .models import db
from .services import bcrypt, jwt


def create_app():
    """Initialize the app"""
    app = Flask(__name__)
    app.config['SECRET_KEY'] = APP_SECRET_KEY
    
    # database(SQLAlchemy) configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///langrythms.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # session configuration
    app.config['SESSION_PERMANENT'] = True
    app.config['SESSION_TYPE'] = 'filesystem'
    app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=1)

    # AWJ configuration
    app.config["JWT_SECRET_KEY"] = JWT_SECRET_KET
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
   

    # Start a session
    server_session = Session(app)

    # Initialize extensions with the app
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    server_session.init_app(app)

    # Create the database table
    with app.app_context():
        db.create_all()


    # Regiter the auth bluepritn
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    app.register_blueprint(docs_blueprint, url_prefix='/docs')
    app.register_blueprint(google_auth_blueprint, url_prefix='/api/google')
    return app