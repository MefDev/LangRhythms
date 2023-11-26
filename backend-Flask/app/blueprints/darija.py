from flask import Blueprint, jsonify
from . import darija_API

darija_blueprint = Blueprint('darija', __name__)


@darija_blueprint.route('/word/ahlan')
def get_word_ahlan():
    """Return the json word of ahlan"""
    return jsonify(darija_API.ahlan_word), 200


@darija_blueprint.route('/word/marhban')
def get_word_marhban():
    """Return the json word of marhban"""
    return jsonify(darija_API.marhban_word), 200
