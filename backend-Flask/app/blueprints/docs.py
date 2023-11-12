from flask import Blueprint, render_template

docs_blueprint = Blueprint("docs", __name__)


@docs_blueprint.route("/")
def guide():
        """Handle the guide for docs"""
        return render_template("docs/guide.html")

