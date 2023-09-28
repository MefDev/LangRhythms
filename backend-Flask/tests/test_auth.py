import requests
import json
from unittest import TestCase, skipIf
from datasets_test import *
from constants import CONNECT_DB_FULL_URL, BASE_URL
from sqlalchemy import select, create_engine
import sys
sys.path.append("..")
from app.models import User


# helper functions

def urljoin(url, parm):
    return f"{url}{parm}"


def check_post_status_code(url, data, headers):
    """Make a post request with the corresponding params"""
    r = requests.post(url, data=json.dumps(data), headers=headers)
    return r.status_code


def check_post_content(url, data, headers):
    """return the content in json format"""
    r = requests.post(url, data=json.dumps(data), headers=headers)
    return json.loads(r.content)


def is_email_registed_db(db_abs_url, email):
    """Check the email is registed on the db"""
    stmt = select(User).where(User.email == email)
    engine = create_engine(db_abs_url)
    is_registed = False
    with engine.connect() as conn:
        for row in conn.execute(stmt):
            if (row.email == email):
                is_registed = True
    return is_registed

def get_users():
    user_url = urljoin(BASE_URL, "users")
    response = requests.get(user_url)
    if response.ok:
        return response
    else:
        return None


# global variables
login_url = urljoin(BASE_URL, "auth/login")
signup_url = urljoin(BASE_URL, "auth/signup")
is_registed_user = is_email_registed_db(
    CONNECT_DB_FULL_URL, datasets_register_success["email"])


class RegisterTest(TestCase):
    @skipIf(is_registed_user, "The user is already registed")
    def test__register_request_post_success(self):
        """Test if the user registered successfully"""
        success_code = check_post_status_code(
            signup_url, datasets_register_success, headers)
        self.assertEqual(success_code, 200)

    def test__register_request_post_email_err(self):
        """Test if the user entred a wrong email"""
        err_status_code = check_post_status_code(
            signup_url, datasets_register_email_err, headers)
        self.assertEqual(err_status_code, 409)

    def test__register_request_post_already_registered_err(self):
        """Test if the user is already registered on the db"""
        response_content = check_post_content(
            signup_url, dataset_already_registered_err, headers)
        self.assertEqual(response_content["error"], "Email already exists")


class LoginTest(TestCase):
    """Test the loggin auth"""

    def test__login_request_post_success(self):
        """Test if the user loggedin successfully"""
        login_success_status_code = check_post_status_code(
            login_url, dataset1_success, headers)
        self.assertEqual(login_success_status_code, 200)
        print(login_success_status_code)

    def test__login_request_post_error_pass(self):
        """Test if the user enter an UNAUTHORIZED password to log"""
        login_err_status_code = check_post_status_code(
            login_url, dataset2_login_err, headers)
        self.assertEqual(login_err_status_code, 401)
        print(login_err_status_code)

    def test__login_request_post_error__mix_email_pass(self):
        """Test if the user enter an UNAUTHORIZED password or email to log"""
        login_err_status_code = check_post_status_code(
            login_url, dataset3_login_err, headers)
        self.assertEqual(login_err_status_code, 401)
        print(login_err_status_code)


class AbstractApiTest(TestCase):
    """This class is an integration test for Abstaract api"""

    def test_request_response(self):
        response = requests.get()
        self.assertTrue(response.ok)
