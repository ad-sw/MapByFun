## [MapByFun](https://mapbyfun.herokuapp.com/)
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/148797804-168d2d33-ccb8-4263-a9dd-713917e52a3f.PNG" width="750" height="375"><br><sub>(Centered art credited to Michael Tompsett.)</sub></br></p>
A <a href="https://www.mapmyrun.com/">MapMyRun</a> clone that evolved into being a just-for-fun "what else can be done" frontend-focused project, but derived from the fact that humans use maps for survival and near-daily in small to large life tasks. Maps represent assurance, safety, planning, and are largely language-agnostic in the sense that they communicate many data types almost purely through visuals alone in a way that everyone can understand, similar to no-code or low-code tools.

<br>The City of Seattle's neighborhoods produce monthly maps for their communities during <a href="https://www.seattle.gov/arts/experience/art-walks">Seattle Art Walks</a> (pre-Covid) to encourage local small-to-medium businesses' growth as well as fostering a stronger cross-cultural social fabric for its diverse population, both ethnically and socioeconomically speaking. Hundreds to thousands would attend throughout the city neighborhoods via these programming networks.
<br><p align="center"><img src="https://artupphinneywood.files.wordpress.com/2014/01/2014_artupmap.jpg" width="150" height="255">
<img src="https://pbs.twimg.com/media/CuHrofeWIAAceDE.jpg" width="530" height="265"></p></br>
The just-for-fun concept was to have a platform that any city or person could design and map out events to be shared with friends or the general public that makes the less familiar less daunting, as the unforeseen becomes more seen. It could help smaller-scaled local businesses access greater audiences to those who reside near but are unaware of their existence. If brand loyalty and repeat customers stems from trust and familiarity via repeated exposure, something like this could help the newer, smaller, and/or more diverse community spaces resonate with more people. A bridge between Eventbrite and Google Maps with alternative use for delivery and shipping logistics.</br>

### Fullstack used:
* CSS & HTML (front-end)
* React (front-end)
* Redux (front-end)
* Javascript (front-end)
* Python (back-end)
* PostgreSQL (back-end)
* Flask (back-end)
* SQLAlchemy (back-end)
* WTForms (back-end)
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
  + Additional Site Features:
    - [X] In the community tab, logged in users may view their friends, users to add as friends, and a combined list of the two (friends and other users). Users may also click on any person's name to view their profile and a high level overview of their routes/site activity. For privacy reasons, only if the user is a friend can they then view their routes.


## [Features List:](https://github.com/ad-sw/MapByFun/wiki/Features-List)

### [Home Page](https://mapbyfun.herokuapp.com/)
- Overview product concept with options to sign up or sign in as a registered or demo user. (Centered art credited to [Michael Tompsett](https://www.lowes.com/pd/Trademark-Fine-Art-Michael-Tompsett-Philadelphia-Pennsylvania-Street-Map-18x24-Canvas-Art/1002797748?cm_mmc=psm-_-c-_-prd-_-dcr-_-pin-_-shp-_-0-_-0-_-0-_-trademark_fine_art&epik=dj0yJnU9THpsWFRTN2dVNHZ0QXhrVUtFQkZfY2UxTjV5Zl9LUUkmcD0wJm49aTJNVXRDMkRqbnVYOHFTZ2N3QnJ2dyZ0PUFBQUFBR0hNRUVZ).)
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/148797804-168d2d33-ccb8-4263-a9dd-713917e52a3f.PNG" width="750" height="375"></p>

### [Login & Sign Up Pages](https://mapbyfun.herokuapp.com/login)
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/147933518-6303138c-8b12-41a0-9345-cc71a19ec7d4.PNG" width="370" height="230" opacity=".5">
<img src="https://user-images.githubusercontent.com/86431563/147933515-ca75444e-05a8-454e-b573-f98a6b30c29b.PNG" width="370" height="230" opacity=".5"></p>

### [User Routes Dashboard](https://mapbyfun.herokuapp.com/users/1/routes)
- View all of your route posts to find details, edit, delete, create more of, or comment on.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/147933974-84ae86fd-386f-460a-bd28-b2d9b3a98dbc.PNG" width="750" height="375"></p>

### [Specific Route Page](https://mapbyfun.herokuapp.com/routes/1)
- View your route's detailed information and any existing comments with the option to add more to.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/148127859-947ecb99-8306-4bc4-bcba-104bca19e258.PNG" width="750" height="375"></p>

### [Friends Dashboard](https://mapbyfun.herokuapp.com/users/1/friends)
- View a collection of your friends to visit one of their specific profile pages, or potentially unfriend.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/147934479-4fc7df84-b63a-4453-9f12-3819c9e1a53f.PNG" width="750" height="375"></p>

### [Specific User Profile](https://mapbyfun.herokuapp.com/users/2)
- View a specific user's high level site information. If they are a friend, you may view their routes and comment on them as well.
<p align="center"><img src="https://user-images.githubusercontent.com/86431563/147934288-d0e5137e-aa18-4da3-af72-ca4e9100ac0c.PNG" width="750" height="375"></p>

## Getting started

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
