# Tappointment Assignment: Ételfutár

## Installation

To run the application, first install its dependencies by running ```npm install``` in both backend and frontend directories.

Before running the backend server with ```npm start```, make sure to set up a MySQL database, then fill out the ```.env.template``` file with the appropriate connection details. 
Save the file as ```.env```. Finally, run the test data located at ```backend/resources/database/SampleData - JS.sql``` against your newly created database.

If everything was done right, the frontend and backend servers should now start up properly.

## Features implemented

* Backend development environment, complete with some tooling (logging, hot-reloading, linting).
* Database connection and persistance using ORM.
* A basic web server serving up the data as JSON.
* A React frontend server fetching data from the backend and displaying it in categories. 
* Registration and a login form, complete with client-side validation.
* Backend routes for managing user persistance with password hashing.
* Server-side session management.
* A Redux store managing the frontend's state, including session cookie presence.
* A client-side shopping cart to put items in and remove items from.

## Features missing

* There is no upper limit for the cart.
* The cart cannot be processed, payment wasn't implemented.

## Known issues

* Frontend design is not responsive.

## Time spent on the assignment

Approx. 40 hours.
