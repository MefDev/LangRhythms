"""Handle documentation blueprints and routes"""
from flask import Blueprint, render_template
from flask_jwt_extended import jwt_required
from . import auth_service

docs_blueprint = Blueprint("docs", __name__)


@docs_blueprint.route("/")
@jwt_required()
def guide():
        """Handle the guide for docs"""
        return render_template("docs/guide.html")

@docs_blueprint.before_request
@jwt_required()
def check_blacklist():
        response = auth_service.check_invalid_tokens()
        return response

