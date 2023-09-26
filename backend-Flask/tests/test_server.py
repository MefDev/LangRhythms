# import pytest
# from app.models import User
# class AuthActions():
#     def __init__(self, client, fullname='TestUser', password='TestPass'):
#         self.client = client
#         self.fullname = fullname
#         self.password = password

#     def create(self):
#         with self.client.application.app_context():
#             test_user = User(fullname=self.fullname, password=self.password)
#             test_user.save()

#     def signup(self):
#         return self.client.post(
#             '/auth/signup',
#             data={'fullname': self.fullname, 'email': self.email, 'password': self.password}
#         )

#     def login(self):
#         return self.client.post(
#             '/auth/login',
#             data={'username': self.username, 'password': self.password}
#         )
    

#     def logout(self):
#         return self.client.get('/logout')

# # Define client and other fixtures here ...

# @pytest.fixture
# def auth(client):
#     return AuthActions(client)