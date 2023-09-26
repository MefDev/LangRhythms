import requests
import json
from unittest import TestCase, skipIf
from datasets_test import *


# helper functions
def check_post_status_code(url, data, headers):
    """Make a post request with the corresponding params"""
    r = requests.post(url, data=json.dumps(data), headers=headers)
    return r.status_code


def check_post_content(url, data, headers):
    """return the content in json format"""
    r = requests.post(url, data=json.dumps(data), headers=headers)
    return json.loads(r.content)




class RegisterTest(TestCase):
  
    
#   skipIf()
    def test__register_request_post_success(self):
        """Test if the user registered successfully"""
        success_code = check_post_status_code(
            signup_url, datasets_register_success, headers)
        self.assertEqual(success_code, 200)

    def test__register_request_post_email_err(self):
        """Test if the user registered successfully"""
        err_status_code = check_post_status_code(
            signup_url, datasets_register_email_err, headers)
        self.assertEqual(err_status_code, 409)

    def test__register_request_post_already_registered_err(self):
        """Test if the user registered successfully"""
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
