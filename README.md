# Express models Lab

In this lab we'll create a database of museums in New York and display them on a map!

## Basic setup:

Install dependencies

```bash
npm install
```

Create a `client/config.js` file. [Sign up for Mapbox](https://www.mapbox.com/) and get an API key. Put the API key inside of `client/confg.js` in this format:

```js
window.accessToken = "YOUR API KEY HERE IN THIS STRING";
```

Start the web server

```
nodemon server.js
```

You should see a map of new york when you visit [`http://localhost:4567/cities`](http://localhost:4567/cities)

## Database Setup:

*   Create a `database/schema.sql` file which creates a `museums` and a schema for cities which includes:
*   In postgres create a database named `museums`
*   The database should have a table named `museums` with the columns:

```sql
id SERIAL PRIMARY KEY
name TEXT
address TEXT
latitude NUMERIC(7, 5)
longitude NUMERIC(7, 5)
```

*   Create a `database/seed.sql` file which inserts a few museums in New York. You'll need to get the latitude and longitude for each museum, which you can get with [this Geocoding tool](http://www.gpsvisualizer.com/geocode)!

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

## Model

*   Create a `models/museum.js` file
*   Define `find`, `all`
*   create a pg-promise function called `getCity` for the `/city/:id` route
*   export model.js using `module.exports` and be sure to import it into `server.js`
*   in `server.js` use the previously created pg-promise functions to get data and output a response
