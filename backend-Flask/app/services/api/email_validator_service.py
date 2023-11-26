import requests

def check_email_isvalid(abstract_key, email):
    """Send a validation request to 3rd party api"""
    try:
        api_key = f"https://emailvalidation.abstractapi.com/v1/?api_key={abstract_key}&email={email}"
        response = requests.get(api_key)
        if (response.status_code == 200):
            json_resp = response.json()
            
            # get the data
            format_valid = json_resp["is_valid_format"]["value"]
            mx_found = json_resp["is_mx_found"]["value"]
            smtp_check = json_resp["is_smtp_valid"]["value"]
            state = json_resp["deliverability"]
            
            # check validity
            return format_valid and mx_found and smtp_check and state == "DELIVERABLE"

        return False
    # Raise expetion when something unusual happens
    except requests.exceptions.RequestException as api_error:
        print(
            f"There was an error contacting the Email Validation API: {api_error}")
        raise SystemExit(api_error)