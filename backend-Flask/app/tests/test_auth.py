from unittest import TestCase, skipIf
from unittest.mock import Mock, patch
from datasets_test import *
from constants import CONNECT_DB_FULL_URL, BASE_URL

import sys
sys.path.append("..")
from app.models import User
from app.config import ABSTRACT_API_KEY
from helpers_functions import *


get_abstract_api_response(ABSTRACT_API_KEY)
# global variables
login_url = urljoin(BASE_URL, "auth/login")
signup_url = urljoin(BASE_URL, "auth/signup")
logout_url = urljoin(BASE_URL, "auth/logout")
get_users_url = urljoin(BASE_URL, "users")
get_uniq_user_url = urljoin(BASE_URL, "users/1")

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
        

    def test__login_request_post_error_pass(self):
        """Test if the user enter an UNAUTHORIZED password to log"""
        login_err_status_code = check_post_status_code(
            login_url, dataset2_login_err, headers)
        self.assertEqual(login_err_status_code, 401)
        

    
        
class LogoutTest(TestCase):
    def test__logout(self):
        """Test if the user loggedin successfully"""
        login_success_status_code = check_post_status_code(
            login_url, dataset1_success, headers)
        self.assertEqual(login_success_status_code, 200)
        err = b'{"msg":"logout successful"}\n'
        req = requests.get(logout_url)
        self.assertTrue(req.ok)
        self.assertEqual(req.content, err)


class AbstractApiResponseTest(TestCase):
    """This class is an integration test for Abstaract api"""
    
    @patch("test_auth.requests.get")
    def test_request_response_success_ok(self, mock_get):
        """Everything is appropriate"""
        mock_get.return_value.ok = True
        response = get_abstract_api_response(ABSTRACT_API_KEY)
        self.assertTrue(response)
    
    @patch("test_auth.requests.get")
    def test_request_response_error_is_not_ok(self, mock_get):
        """Everything is appropriate"""
        mock_get.return_value.ok = False
        response = get_abstract_api_response("ABSTRACT_API_KEY")
        self.assertIsNone(response)
        
class AbstractApiErrStatusTest(TestCase):
    """Check the status of each response"""
    @patch("test_auth.requests.get")
    def test_request_response_unauthorized(self, mock_get):
        """The abstact key wasn't correct"""
        mock_get.return_value.status_code = 401
        status_code = get_abstract_api_status_code("ABSTRACT_API_KEY")
        self.assertEqual(status_code, 401)
    @patch("test_auth.requests.get")
    def test_request_response_quota_reached(self, mock_get):
        """Quota reached"""
        oldkey ="ed555b87745f4eb19c69c1d6822c7f55"
        mock_get.return_value.status_code = 422
        status_code = get_abstract_api_status_code(oldkey)
        self.assertEqual(status_code, 422)

    @patch("test_auth.requests.get")
    def test_request_response_bad_request(self, mock_get):
        """bad request"""
        mock_get.return_value.status_code = 429
        status_code = get_abstract_api_status_code(ABSTRACT_API_KEY)
        self.assertEqual(status_code, 429)
    
    @patch("test_auth.requests.get")
    def test_request_response_too_many_req(self, mock_get):
        """too many requests"""
        mock_get.return_value.status_code = 400
        status_code = get_abstract_api_status_code(ABSTRACT_API_KEY)
        self.assertEqual(status_code, 400)
    @patch("test_auth.requests.get")
    def test_request_response_enternal_server_err(self, mock_get):
        """enternal server err"""
        mock_get.return_value.status_code = 500
        status_code = get_abstract_api_status_code(ABSTRACT_API_KEY)
        self.assertEqual(status_code, 500)
    @patch("test_auth.requests.get")
    def test_request_response_service_unavailable(self, mock_get):
        """service unavailable"""
        mock_get.return_value.status_code = 503
        status_code = get_abstract_api_status_code(ABSTRACT_API_KEY)
        self.assertEqual(status_code, 503)
    

class usersTest(TestCase):
    @patch("test_auth.requests.get")
    def test_get_users_response_success(self, mock_get):
        user1 = {
        "email": "ahmed@hotmail.com",
        "fullname": "Ahmed Awad",
        "id": 0,
        "userId": "0faf7767dce242dc9682e70122f4b4ad"
        }
        user2 = {
            "email": "ahmed@yahoo.com",
            "fullname": "Ahmed imad",
            "id": 1,
            "userId": "017f8024193e4d5db2b92409ec19fa5e"
            },
        
        data = {
            "data": [user1, user2]
        }
        mock_get.return_value.status_code = Mock(ok=200)
        mock_get.return_value.json.return_value = data
        res = requests.get(get_users_url)
        self.assertEqual(res.json(),data)
    @patch("test_auth.requests.get")
    def test_get_users_response_not_ok(self, mock_get):
        data = {
            "data": []
        }
        mock_get.return_value.status_code = Mock(ok=200)
        mock_get.return_value.json.return_value = data
        res = requests.get(get_users_url)
        self.assertEqual(res.json(),data)
    
    

    @patch("test_auth.requests.get")
    def test_particular_user_when_db_populated_and_usr_there(self, mock_get):
        uniq_usr = {
            "email": "ahmed@yahoo.com",
            "fullname": "Ahmed imad",
            "id": 1,
            "userId": "017f8024193e4d5db2b92409ec19fa5e"
        }
        mock_get.return_value.status_code = Mock(ok=200)
        mock_get.return_value.json.return_value = uniq_usr
        res = requests.get(get_uniq_user_url)
        self.assertEqual(res.json(),uniq_usr)

    @patch("test_auth.requests.get")
    def test_particular_user_when_db_empty_or_indefined_user(self, mock_get):
        err = {
            "error": "Unkown user id, try a different one"
        }
        mock_get.return_value.status_code = Mock(ok=404)
        mock_get.return_value.json.return_value = err
        res = requests.get(get_uniq_user_url)
        self.assertEqual(res.json(),err)
