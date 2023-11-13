import requests
import json
import sys
sys.path.append("..")
from app.models import User
from sqlalchemy import select, create_engine
from constants import BASE_URL, ABSTRACT_API_URL


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
    """Get users from the db"""
    user_url = urljoin(BASE_URL, "users")
    response = requests.get(user_url)
    if response.ok:
        return response
    else:
        return None


def get_abstract_api_response(abstract_key, email="johnsmith@gmail.com"):
        """Get the api response"""
        api_url = f"{ABSTRACT_API_URL}?api_key={abstract_key}&email={email}"
        res = requests.get(api_url)
        if res.ok:
            return res
        else:
            return None


def get_abstract_api_status_code(abstract_key, email="johnsmith@gmail.com"):
        """Get the api response"""
        api_url = f"{ABSTRACT_API_URL}?api_key={abstract_key}&email={email}"
        res = requests.get(api_url)
        if res.status_code == 204:
            return res.status_code
        elif res.status_code == 400:
            return res.status_code
        elif res.status_code == 401:
            return res.status_code
        elif res.status_code == 422:
            return res.status_code
        elif res.status_code == 429:
            return res.status_code
        elif res.status_code == 500:
            return res.status_code
        elif res.status_code == 503:
            return res.status_code
        else:
            return None
        

