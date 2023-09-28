headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
dataset1_success = {
            "email": "ahmed@hotmail.com",
            "password": "ahmed123@.a"
        }
dataset2_login_err = {
    "email": "ahmed@hotmail.com",
    "password": "ahmed123."
}

dataset3_login_err = {
    "email": "ahmed@hottmail.com",
    "password": "ahmed123."
}

datasets_register_success ={
    "fullname": "Ahmed imad",
    "email":"ahmed@aol.com",
    "password":"ahmed123@.a"
}
    
datasets_register_email_err ={
    "fullname": "Ahmed Awad",
    "email":"ahmed@hottmail.csm",
    "password":"ahmed123@.a"
}
dataset_already_registered_err = {
    "fullname": "Ahmed imad",
    "email":"ahmed@yahoo.com",
    "password":"ahmed123@.a"
}

## sql config paths


