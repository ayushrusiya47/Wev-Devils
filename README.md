# Web DEVil

This project is made to handle the Fest event of a college


# Screenshots
## home
![home page](https://i.ibb.co/vks7d1p/Screenshot-451.png)
## signIn
![](https://i.ibb.co/VBTYNQn/Screenshot-452.png)
## Signup
![](https://i.ibb.co/w0BkYFv/Screenshot-453.png)
## events
![](https://i.ibb.co/VQ29x7N/Screenshot-460.png)
## events
![](https://i.ibb.co/yWhDp4j/Screenshot-456.png)
## events
![](https://i.ibb.co/z7j21HG/Screenshot-455.png)
## UserProfile
![](https://i.ibb.co/HqcX2RS/Screenshot-457.png)
## userprofile cntd
![](https://i.ibb.co/GJ2vGT0/Screenshot-458.png)
## screenshot for responsive design
## landing Page
![](https://i.ibb.co/6HyLfnw/Screenshot-2021-07-09-23-31-43-67.jpg)
## Signin
![](https://i.ibb.co/3mfYpPr/Screenshot-2021-07-09-23-34-08-87.jpg)
## SignUp
![](https://i.ibb.co/yqtv8LR/Screenshot-2021-07-09-23-33-21-42.jpg)
## Events
![](https://i.ibb.co/Sr6nbrJ/Screenshot-2021-07-09-234455.png)
## Profile page
![](https://i.ibb.co/7jxLzRF/Screenshot-2021-07-09-234616.png)
## Admin Panel
![](https://i.ibb.co/Ph5qdN5/admin-panel.png)


# Hosted URL
This site is hosted at Netlify
https://prospero.netlify.app/
## Test user
Username- Testuser
Email- user@gmail.com
password- webkritipasskey

# Features Implemented
- In this Fest website we have add sign in/ sign up for user;
- we have also added discord chat widget which is connected to main events discord server

## Frontend
### In front end We have used::
- AOS library
- Vanilla javascript
- HTML5
- CSS3
There is the main index.html basically as home page.
This page links to sign in / sign up  and Admin pannel log in.
## Subfolder 
- ## Pages
This folder contains all the HTML,CSS  and javascript for the following:
- Sign in page
- Sign up page
- Events Page
- Admin Page
- Edit password
- ## Public
This folder consists of all the image graphics and svgs' for the project 
It contains:
- Avatars- userprofiles images
- Assests- contains svg, png etc for graphics
- Logo - contains all Logos and images for the website
- Event /Event-images - Contains all images required for the event page

## Security
- We do not store plain-text passwords anywhere in the code. More over, the password-hash is also not sent to the user when creating his session
- Input validation is done directly on the front end.

## Backend

The backend of the project creates a server and provides several routes for different tasks.

There are two routes under /auth -

- /signUp route - This takes users data and saves that in the database and signs up the user. It also hashes the password before saving.
- /signIn route - This routes takes the user email and password and authenticates user by checking password.

VerifyToken middleware -

- For all the other routes this middleware runs first and it takes token from req.header and authenticates the user to go to the further routes

There are four routes under /event -

- /register route - This route take the event name and registers the user in that event.
- /unregister route - This route take the event name and unregisters the user from that event.
- /status route - This route the current registration status of the events of the user. It
- /openStatus route - This route provides the status of a event if registration is still open.

There are five routes under /admin all -

- /signIn route - This route is the same as signIn route of /auth.
- /getList route - This route provides list of all users and the events they have registeres in.
- /count route - This routes provide no. of registration in the events.
- /eventClose route - This route takes a event and closes registration for that event .
- /eventopen route - This route takes a event and open registration for that event .

There are two routes under /userData -

- /getdata - This route returns the email, name and profile picture code of the user.
- /changeCode - This route takes a new code for a new profile picture an updates that in the database.

# Database structure and basic working of backend

The database of the project contains two tables users and event.  
The users table contains 8 columns for -

- username
- email
- password (hashed)
- 4 boolean rows (e1,e2,e3,e4) for storing if the user is registered in the event
- code (an integer) to store the code of profile picture of the user

The event table contains boolean columns (e1,e2,e3,e4) for storing the opening status of the event. If the event is closed it stores true and false other wise.

##Basic Working

- Signup - The user enters his credentials and first we check if those credentials are already present, if not then we add them in the data base (after hashing password) then we generate a token and send that to front en where it is stored in local storage.
- Signin - The user enter email and password if those are correct we grant him the access.
- register/unregister - We just toogle the boolean value of the concerned event to register/unregister (true / false) in users table.
- Open/Close -We just toogle the boolean value of the concerned event to open/close (false / true) in event table.
- Profile pic - There are 7 profile pic on frontend, user is assigned one code (number between 0 - 6) at the time of signUp which becomes his profile picture (frontend assigns picture from the code).

# Technologies/Libraries/Packages Used

## Backend

- express- for server related works
- dotenv- for setting environment variables
- nodemon- for testing purposes
- bcrypt- for hashing password
- cors- for ???
- jsonwebtoken- for creating and verifying tokens

# Local Setup

- First clone the backend library (https://github.com/ayushrusiya47/Web-Devils-Backend.git) and frontend library (https://github.com/ayushrusiya47/Wev-Devils.git) into your local system.
- Create a database in elephantsql and create two tables by running following command -
  - create table users (id serial primary key not null, username text, email text unique, password text, e1 int, e2 int, e3 int, e4 int, code int)
  - CREATE TABLE event( e1 boolean NOT NULL, e2 boolean NOT NULL, e3 boolean NOT NULL, e4 boolean NOT NULL);
  - INSERT INTO event (e1,e2,e3,e4) VALUES (False, False, False, False);
- Then create a .env file in the backend repository and add following data -
  - DB_URL = Your database Url
  - PRIVATE_KEY = top secret string
- Then run the following command in your terminal
  - npm install
  - npm start
- Your server is started, now add this localhost url in frontend wherever you want to fetch something from backend

# Team Members

Ayush Rusiya (2020IMT-020)
Sanket Santosh Diwate (2020IMT-046)
Shikhar Gupta (2020IMT-090)
<<<<<<< HEAD
----Name & Roll Number----
## Note
The reset password feature is underdevelopment it is not fully functional now
Few Commits have been made in readme due cdn error
=======
>>>>>>> 010a2acca8d9d695ebc38c8135fd5262911fd4ae
