from flask import Blueprint, render_template


docs_blueprint = Blueprint("docs", __name__)

@docs_blueprint.route("/")
def guide():
        return render_template("docs/guide.html")