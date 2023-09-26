## BackEnd
### 1. Install the requirements within `requirements.txt` using pip

```
    pip install -r requirements.txt
```


#### A) setup

Run the following commands:
1) Make sure that you've already installed python, sqlite3, and Flask. Then, write the following command:

##### 1-1: to run server.py
 ### Make sure that you already in the backend-Flask folder otherwise the command will not run

```console
    flask --app app/server run
```
After running that command, you could go to http://127.0.0.1:5000
###### ROUTES 


### AUTH ROUTES
## Normal auth
- /auth/signup
- /auth/login
## Google auth
- /api/google/auth/login

### API ROUTES for ARABIC
- /arabic/first-lesson
- /arabic/alphabets
### API ROUTES for Darija
- /darija/words/marhban
- /darija/words/ahlan


#### A) setup google API

##### 1: to run google_api.py

Run the following commands:

1) Make sure to create a config.py 
1-1) First thing first you need to get your Google credentials details - Client ID and Client Secret. Go to [`Google Developers`](https://console.developers.google.com/apis/credentials)
 website and in the Credentials click on 'Create credentials. 
- Select 'OAuth client ID'

 ![OAuth client ID](https://res.cloudinary.com/practicaldev/image/fetch/s--z7SYnWLF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4q7u354tyh7d4go864vl.png)
 
 1-2)You may have to create OAuth Consent Screen. Just enter your Flask app name and your email address in the user support & developer email and click 'Save and continue'.
  
  ![OAuth App information](https://res.cloudinary.com/practicaldev/image/fetch/s--z7SYnWLF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4q7u354tyh7d4go864vl.png)
 ![OAuth App information](https://res.cloudinary.com/practicaldev/image/fetch/s--zAbdkRLx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iqjjdwqas75a42ncsky0.png)

- After that go back to credentials tab and edit your OAuth Client ID. Add new authorized URI to redirect your logins through:

![OAuth Authorized redirect URLS](https://res.cloudinary.com/practicaldev/image/fetch/s--ZqDYLqRw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y5ojqywlwqhp2ja51kb8.png)

- After that, you could put the get the client and secret ID from the generated client_secret.json and add it to the backend-Flask directory and fill the config.py file

```console
CLIENT_ID = "client ID"
CLIENT_SECRET = "secret key"
SECRET_KEY = "secret key for the app"
```
