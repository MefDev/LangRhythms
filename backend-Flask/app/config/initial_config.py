import os, base64

def generate_strong_password():
    secret_key_bytes = os.urandom(24)
    return base64.b64encode(secret_key_bytes).decode('utf-8')

# create a random strong keys for security purposes
APP_SECRET_KEY = generate_strong_password()
JWT_SECRET_KET = generate_strong_password()

