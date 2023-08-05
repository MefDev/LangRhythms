## BackEnd
### 1. Install the requirements within `requirements.txt` using pip

```
    pip install -r requirements.txt
```


#### A) setup

Run the following commands:
1) Make sure that you've already installed python, sqlite3, and Flask. Then, write the following command:

##### 1-1: to run server.py

```console
    flask --app server run
```
After running that command, you could go to http://127.0.0.1:5000
###### ROUTES 

- /logintoken
- /signup


##### 1-1: to run google_api.py

1) Make sure that you are oppening a new terminal and running that command bellow

```console
    flask --app google_api run -p 8000
```
After running that command, you could go to http://127.0.0.1:8000
###### ROUTES 
- /login



