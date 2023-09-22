# flask_testing/test_base.py
from unittest import TestCase
from flask import Flask
from ..app.config import CLIENT_SECRET
from flask_session import Session
from ..app.models import db

class BaseTestCase(TestCase):
    """A base test case for flask-tracking."""

    def create_app(self):
        app = Flask(__name__)
        app.config['SESSION_TYPE'] = 'filesystem'
        app.secret_key = CLIENT_SECRET
        app.debug = True
        server_session = Session(app)
        server_session.init_app(app)
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()