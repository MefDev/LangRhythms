from .import db
from uuid import uuid4

  
def get_uuid():
    return uuid4().hex
  
class User(db.Model):
    """Create a user table"""
    __tablename__ = "users"
    id = db.Column(db.String(11), primary_key=True, unique=True, default=get_uuid)
    fullname = db.Column(db.String(150), unique=False)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)