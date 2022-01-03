## [MapByFun](https://mapbyfun.herokuapp.com/) 

A MapMyRun clone that focuses on frontend styling.

### Fullstack used:
* CSS & HTML (front-end)
* React (front-end)
* Redux (front-end)
* Python (back-end)
* Sequelize (back-end)
---
## [Database Schema](https://github.com/ad-sw/ConstructHunt/wiki/Database-Schema)

### Features Overview:
* Visitors View
  + Navigation Bar
    - [X] Sign up
    - [X] Log in (registered user or demo)
 
* Logged-in View
  + Route Posts
    - [X] Create route post (C)
    - [X] View route post (R)
    - [X] Update route post (U)
    - [X] Delete route post (D)
  + Route Comments
    - [X] Create comment  (C)
    - [X] Read comment (R)
    - [X] Update comment    (U)
    - [X] Delete comment  (D)
  + Friends
    - [X] Add friend  (C)
    - [X] View friends (R)
    - [X] Unfriend friends    (D)
  + Additional Site Features:
    - [X] In the community tab, logged in users may view their friends, users to add as friends, and a combined list of the two (friends and other users). Users may also click on any person's name to view their profile and a high level overview of their routes/site activity. For privacy reasons, only if the user is a friend can they then view their routes.


## [Features List:](https://github.com/ad-sw/MapByFun/wiki/Features-List)

### [Home Page](https://mapbyfun.herokuapp.com/)
- Log in, sign up or sign in as a demo user.

### [User Routes Dashboard](https://mapbyfun.herokuapp.com/users/1/routes)
- View all of your route posts to find details, edit, delete, create more of, or comment on.

### [Specific Route Page](https://mapbyfun.herokuapp.com/routes/1)
- View your route's detailed information and any existing comments with the option to add more to.

### [Friends Dashboard](https://mapbyfun.herokuapp.com/users/1/friends)
- View a collection of your friends to visit one of their specific profile pages, or potentially unfriend.

### [Nonfriends Dashboard](https://mapbyfun.herokuapp.com/users/1/people)
- View a collection of users that you may add as a friend or visit one of their specific profile pages.

### [All Users Dashboard](https://mapbyfun.herokuapp.com/users)
- Overview all existing site users that you may add/remove as a friend or for profile page browsing in one cohesive spot.

### [Specific User Profile](https://mapbyfun.herokuapp.com/users/2)
- View a specific user's high level site information. If they are a friend, you may view their routes and comment on them as well.

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

```example = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";```


5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```
