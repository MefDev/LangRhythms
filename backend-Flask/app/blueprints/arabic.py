from flask import Blueprint, jsonify
from . import arabic_API

arabic_blueprint = Blueprint('arabic', __name__)


@arabic_blueprint.route('/first-lesson')
def get_first_lesson():
    """Return the arabic first lesson"""
    return jsonify(arabic_API.arabic_greetings_first_lesson), 200


@arabic_blueprint.route('/alphabets/pronouciation')
def get_pronouciation():
    """Return the json alphabets pronouciation"""
    return jsonify(arabic_API.arabic_alphabets_pronouciation), 200
