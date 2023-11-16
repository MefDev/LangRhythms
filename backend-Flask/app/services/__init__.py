from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from ..models import db
from ..models.users import User
bcrypt = Bcrypt()
jwt = JWTManager()