from flask import Flask

# Configure application
app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)


#################### Routes ########################
@app.route("/home")
def home():
    """homepage"""
    # render homepage
    return {"Greetings": ["Hello", "hey", "to LangRythms"]}

