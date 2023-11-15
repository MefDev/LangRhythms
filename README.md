# LangRhythms
Welcome to LangRhythms, a foreign language learning website for language learners.

## [`Demo`](https://lang-rhythms.vercel.app/)

## Description:

Welcome to LangRhythms, a foreign language learning website designed for learning Tamazight, Darija, and Arabic. This platform aims to help language learners, especially beginners, master writing and pronouncing different Amazigh and Arabic letters while providing access to thousands of interactive and fun lessons to improve their comprehension of the Moroccan language, Darija.


## Technologies Used:

LangRhythms is built using the following technologies:
- Backend: Python with Flask framework
- Database: SQLite3
- Frontend: React

---

## How to run this web app locally

### Client (Frontend)
To run the client side, follow these steps:
1. Install Node.js (npm will be used).
2. Change to the client directory:
```
cd client
```
3. Install dependencies:
```
npm install
```
4. Run the client app
```
npm run dev
```

The client app will be accessible at `http://localhost:5173/` in your browser.

## BackEnd
To run the backend, follow these steps:
1. Go to the backend
```
cd backend-Flask/
```
2. Use Virtual Environment:

Always use a virtual environment for your Flask projects. This allows you to isolate dependencies for each project.
To create a virtual environment, you can use the following commands:
```
python -m venv venv
source venv/bin/activate  #On Windows, use 'venv\Scripts\activate'
```
3. Install dependencies:
```
pip install -r requirements.txt
```

3. Set up the necessary environment variables and configurations

```
export FLASK_APP=app/manage
```
6. Run the flask app
```console
    flask run
```
5. The backend server will be accessible at `http://localhost:5000/` in your browser.


After running that command, you could go to http://127.0.0.1:5000


#### A) setup google API

1-1) First thing first you need to get your Google credentials details - Client ID. Go to [`Google Developers`](https://console.developers.google.com/apis/credentials)
 website and in the Credentials click on 'Create credentials. 
- Select 'OAuth client ID'

 ![OAuth client ID](https://res.cloudinary.com/practicaldev/image/fetch/s--z7SYnWLF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4q7u354tyh7d4go864vl.png)
 
 1-2)You may have to create OAuth Consent Screen. Just enter your Flask app name and your email address in the user support & developer email and click 'Save and continue'.
  
  ![OAuth App information](https://res.cloudinary.com/practicaldev/image/fetch/s--z7SYnWLF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4q7u354tyh7d4go864vl.png)
 ![OAuth App information](https://res.cloudinary.com/practicaldev/image/fetch/s--zAbdkRLx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iqjjdwqas75a42ncsky0.png)

- After that go back to credentials tab and edit your OAuth Client ID. Add new authorized URI to redirect your logins through: Make sure that the same as that http://127.0.0.1:5000/api/google/callback

![OAuth Authorized redirect URLS](https://res.cloudinary.com/practicaldev/image/fetch/s--ZqDYLqRw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y5ojqywlwqhp2ja51kb8.png)

- After that, you could put the get the client and secret ID from the generated client_secret.json and add it to the backend-Flask/app/services/api 
- Make sure to export CLIENT_ID name as shown bellow
For example 
```console
export CLIENT_ID="Your client ID"
```

#### A) setup Abstract API
- to assure the app validate emails correctly. Make sure that you create an account there and change the key tp yours:
example:
```console
export ABSTRACT_API_KEY="Your API KEY"
```


## Contribution:


1. `Read the Documentation`: Start by thoroughly reading the project's documentation, including the contributing guidelines, code of conduct, and any specific instructions for contributors. Understanding the project's goals, coding standards, and workflow is crucial before you start contributing.

2.`Fork the Repository`: Fork the project's repository to your GitHub account. This creates a copy of the repository under your control, allowing you to make changes without affecting the original project.

3.`Set Up Locally`: Clone the forked repository to your local machine using Git. Set up the development environment and install any required dependencies following the project's instructions.

4. `Create a New Branch`: Before making changes, create a new branch in your local repository. Name the branch appropriately based on the feature or bug you are working on.

5.`Work on the Changes`: Make your desired changes to the codebase, following the project's coding standards and guidelines. Keep the changes focused and specific to a single feature or bug fix.


4.`Commit and Push`: Commit your changes with a clear and descriptive commit message. Push the changes to your forked repository on GitHub.

5.`Pull Request`: Once you are satisfied with your changes, open a pull request (PR) from your branch to the original repository's main branch. Provide a detailed description of the changes you made and the problem you are solving.


## Issues

Issues are used to track and manage different aspects of the project, including bug reports, feature requests, and general discussions. They are a way for project contributors and users to communicate with each other, report problems, and propose enhancements.

### Reporting Bugs
If you encounter a bug or a problem with the project, please check the existing issues to see if it has already been reported. If not, you can create a new issue to report the bug. Be sure to include as much information as possible to help the maintainers understand the issue and reproduce it. This includes the steps to reproduce the bug, the expected behavior, and the actual behavior.

### Requesting Features
If you have a feature request or an idea to improve the project, you can create a new issue to propose it. Describe the new feature or enhancement in detail, and explain how it would benefit the project. This allows other contributors to discuss the idea and provide feedback.

### Contributing and Claiming Issues
If you want to contribute to the project and work on a specific issue, feel free to claim the issue by leaving a comment. This helps avoid duplication of effort, as other contributors will know that the issue is already being worked on. If you're new to contributing, look for issues labeled as "good first issue" or "help wanted" to get started.

### Issue Labels
Issues may be labeled to categorize them and provide additional context. Common labels include "bug", "feature request", "documentation", "enhancement", "question", etc. These labels help in organizing and prioritizing tasks.

### Communication
Feel free to use issues for general discussions related to the project. If you have a question, need clarification, or want to discuss project-related topics, create an issue for it.

### Closing Issues
Once an issue has been resolved, it will be closed by the project maintainers. Closed issues indicate that the problem has been addressed, or the feature has been implemented.
