# Express models Lab

In this lab we'll create a database of museums in New York and display them on a map!

## Basic setup:

Install dependencies

```bash
npm install
```

Create a `client/config.js` file. [Sign up for Mapbox](https://www.mapbox.com/) and get an API key. Put the API key inside of `client/config.js` in this format:

```js
window.accessToken = "YOUR API KEY HERE IN THIS STRING";
```

Start the web server

```bash
nodemon server.js
```

You should see a map of New York when you visit [`http://localhost:4567/cities`](http://localhost:4567/cities)

## Database Setup:

*   In the `database/schema.sql` file:

    *   create a database named `museums`
    *   Create a table named `museums` with the columns:

        ```sql
        id SERIAL PRIMARY KEY,
        name TEXT,
        address TEXT,
        latitude NUMERIC(7, 5),
        longitude NUMERIC(7, 5)
        ```

*   In the `database/seed.sql` file, insert a few museums in New York. You'll need to get the latitude and longitude for each museum, which you can get with [this Geocoding tool](http://www.gpsvisualizer.com/geocode)!

*   Run your schema and seed files.

## Configuration

*   Install the dependencies for pg-promise `npm install --save pg-promise bluebird pg-monitor`
*   Create a `database/connection.js` file, and paste the code below into it. Change the `database_name` in the connectionURL to the name of your database.

```js
const promise = require("bluebird");
const monitor = require("pg-monitor");

promise.config({
    longStackTraces: true // WARNING: Do not set this option in production!
});

const initOptions = {
    promiseLib: promise
};

// attach to all events at once;
monitor.attach(initOptions, ["query", "error"]);

// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")(initOptions);

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = "postgres://localhost:5432/database_name";

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

module.exports = db;
```

*   Open the `models/Museum.js` file
*   Define a `Museum.all` method that resolves a promise with all museums.
*   Fill out the `GET museums.json` route in `server.js` to respond with the JSON of all museums in the database
*   `client/javascript/museums/index.js` is a JavaScript file loaded in the HTML file served on the `/museums` page. Write a function `getMuseums()` that makes an AJAX call to the `/museums.json` endpoint to get a list of all museums.
*   Create a button in the `museums/index` view
*   Create an event listener callback function that should call `getMuseums()` and create a map marker for each of the museums.
*   Read [the Leaflet documentation on creating markers on the map](https://leafletjs.com/examples/quick-start/#markers-circles-and-polygons).

## BONUS

*   Add a popup for each of the markers, so when a user clicks on a marker it shows the name and address. Read up on [the popup documentation here](https://leafletjs.com/examples/quick-start/#working-with-popups).
*   Create a page that loads information about one museum:

    *   Create a `GET /museums/:id.json` route in `server.js` that returns JSON data about one museum
    *   Create a `GET /museums/:id` route that serves an HTML page from the file `views/museums/show.ejs`.
    *   The file `client/javascript/museums/show.js` will load on the single museum page. Add code here to make a call to the `/museums/:id.json` endpoint and place a marker on the map for that museum.
