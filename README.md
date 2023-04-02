## [MapByFun](https://map-byfun.herokuapp.com/)
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985587-83a1bba2-7439-486d-99da-0fd56b5dafb2.PNG" width="750" height="375"><br><sub>(Centered art credited to Michael Tompsett.)</sub></br></p>
A <a href="https://www.mapmyrun.com/">MapMyRun</a> clone that evolved into being a frontend-to-backend project. 
<p>The City of Seattle's neighborhoods produce monthly maps during <a href="https://www.seattle.gov/arts/experience/art-walks">Seattle Art Walks</a> for their communities to foster growth among local businesses and strengthen its cross-cultural social fabric. The clone is of a platform where any city or person could design and map out events with friends or the general public. Maps represent assurance, safety, planning, and are language-agnostic where they communicate data types almost solely through visuals that everyone can understand.

This can help smaller-scaled local businesses access greater audiences to those who reside near but are unaware. It's like a bridge between Eventbrite and Google Maps with alternative use for delivery and shipping logistics.

<p align="center"><img src="https://artupphinneywood.files.wordpress.com/2014/01/2014_artupmap.jpg" width="150" height="255">
<img src="https://pbs.twimg.com/media/CuHrofeWIAAceDE.jpg" width="530" height="265"></p>

### Fullstack used:
* CSS & HTML (frontend)
* React (frontend)
* Redux (frontend)
* JavaScript (frontend)
* Python (backend)
* PostgreSQL (backend)
* Flask (backend)
* SQLAlchemy (backend)
* WTForms (backend)
---
## [Database Schema](https://github.com/ad-sw/MapByFun/wiki/Database-Schema)

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
  + Search Bars x5
    - [X] Search Bar 1: search your own routes on your routes dashboard page (R)
    - [X] Search Bar 2: search friends by first or last name on the Community > Friends dashboard page (R)
    - [X] Search Bar 3: search other users by first or last name on the Community > Find Friends dashboard page (R)
    - [X] Search Bar 4: search both friends and other users by first or last name on the Community > All Users dashboard page (R)
    - [X] Search Bar 5: search a friend's routes on a friend's user profile page (R)

  + Additional Site Features:
    - [X] In the community tab, logged in users may view their friends, users to add as friends, and a combined list of the two (friends and other users). Users may also click on any person's name to view their profile and a high level overview of their routes/site activity. For privacy reasons, only if the user is a friend can they then view their routes.


## [Features List](https://github.com/ad-sw/MapByFun/wiki/Features-List)

### [Home Page](https://map-byfun.herokuapp.com/)
- Overview product concept with options to sign up or sign in as a registered or demo user. (Centered art credited to [Michael Tompsett](https://www.lowes.com/pd/Trademark-Fine-Art-Michael-Tompsett-Philadelphia-Pennsylvania-Street-Map-18x24-Canvas-Art/1002797748?cm_mmc=psm-_-c-_-prd-_-dcr-_-pin-_-shp-_-0-_-0-_-0-_-trademark_fine_art&epik=dj0yJnU9THpsWFRTN2dVNHZ0QXhrVUtFQkZfY2UxTjV5Zl9LUUkmcD0wJm49aTJNVXRDMkRqbnVYOHFTZ2N3QnJ2dyZ0PUFBQUFBR0hNRUVZ).)
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985587-83a1bba2-7439-486d-99da-0fd56b5dafb2.PNG" width="750" height="375"></p>

### [Log In & Sign Up Pages](https://map-byfun.herokuapp.com/login)
- Sign up and log in as a registered or demo user.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/153731736-66362800-e218-4f1a-8e6f-eb4764d0ae9a.PNG" width="370" height="230" opacity=".5">
<img src="https://user-images.githubusercontent.com/86431563/153730955-cf484a60-b9e1-4870-baa2-fe3d5a2d1895.PNG" width="370" height="230" opacity=".5"></p>

### [User Routes Dashboard](https://map-byfun.herokuapp.com/users/1/routes)
- View all of your route posts to search through them, find details, create/edit/delete more of them, or comment on them.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985160-8a3ebc3f-0869-4719-9b3b-63f166539351.PNG" width="750" height="375"></p>

### [Specific Route Page](https://map-byfun.herokuapp.com/routes/1)
- View your route's detailed information to edit or review the route and any existing comments with the option to add/edit comments.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985155-8f461b3e-8739-4117-8be8-465cfc93232e.PNG" width="750" height="375"></p>

### [Friends Dashboard](https://map-byfun.herokuapp.com/users/1/friends)
- View a collection of your friends to search through by first or last name and visit one of their specific profile pages, or potentially unfriend them.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156986027-fada1220-ad74-4ebe-b735-3840161ce242.PNG" width="750" height="375"></p>

### [Find Friends Dashboard](https://map-byfun.herokuapp.com/users/1/friends)
- View a collection of other users to search through by first or last name and friend them, or/and visit their specific profile page.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985145-edff86f4-6d2a-479d-b6f4-fd95bb0e6cfa.PNG" width="750" height="375"></p>

### [All Users Dashboard](https://map-byfun.herokuapp.com/users/1/friends)
- View a collection of all users to search through by first or last name and visit one of their specific profile pages, or potentially friend/unfriend them.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985148-44a3e03d-3dc8-4566-93a5-1e45d291f4b1.PNG" width="750" height="375"></p>

### [Friend User Profile](https://map-byfun.herokuapp.com/users/2)
- View a friend's high level site information where you may search and view their routes to comments, as well as comment on their routes of your choosing.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985150-c2046781-d7e3-41b4-86a3-07494ae2610e.PNG" width="750" height="375"></p>

### [Regular User Profile](https://map-byfun.herokuapp.com/users/2)
- View a user's high level site information where you may scroll through and see a summary of their site activity, but won't be able to search for a specific route or view any until you've added them as a friend.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/156985153-f9e57958-5f6c-4317-a827-d6a6c55d5562.PNG" width="750" height="375"></p>

## Local Use Set Up

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/ad-sw/MapByFun.git
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
