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
* A Redux store managing the frontend's state.
* A registration and a login form, complete with client-side validation.
* Back-end routes managing user persistance.
* Password hashing.
* A client-side shopping cart to put items in and remove items from.

## Features missing

* Frontend design is not responsive.
* There is no upper limit for the cart.
* The cart cannot be processed, as there's no order button.
* Even if there was an order button, payment wasn't implemented.
* There is no button or route for logging out.

## Known issues

* Session handling is not implemented on the client-side, which means refreshing the page automatically logs you out.
* Frontend design is not responsive (It's as much an issue, as its a missing feature. Sadly, I ran out of time. :( ).

## Time spent on the assignment

Approx. 35 hours.
