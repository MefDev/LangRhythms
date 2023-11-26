from . import db
from uuid import uuid4

  
def get_uuid():
    """Get a new UUID"""
    return uuid4().hex
  
class User(db.Model):
    """Create a user table"""
    __tablename__ = "users"
    id = db.Column(db.String(11), primary_key=True, unique=True, default=get_uuid)
    fullname = db.Column(db.String(150), unique=False)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.Text, nullable=False)
    invalidated_tokens = db.Column(db.Text)

    def invalidate_token(self, token_to_invalidate):
        """Invalidate access_tokens"""
        if token_to_invalidate not in self.invalidated_tokens:
            self.invalidated_tokens = token_to_invalidate
            db.session.commit()