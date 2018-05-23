## PG-PROMISE LAB: A Tale of Two (or 160,000) Cities...Retold

For homework you created an Express web server with multiple route handlers. The data we used came from a super handy npm package named `cities.json`. For this lab we will talk to a local database instead using `pg-promise`.

## Let's Get 'Er Done

### Database Setup:
- In postgres create a database named `cities_db`
- The database should have a table named `cities` with the below colums:
``` sql
id SERIAL PRIMARY KEY,
name VARCHAR(255),
country VARCHAR(255),
lat INTEGER,
lng INTEGER
```
- Add some data into your database, make sure to run some queries and ensure the database is set up properly

### Configuration
- leave postgres, run `npm install --save pg-promise bluebird pg-monitor` in the root of your app file structure
- create a `model.js` file, and paste the below code in `model.js` and modify it with your port number and database name 

``` js
const promise = require("bluebird");
const monitor = require("pg-monitor");

promise.config({
  longStackTraces: true // WARNING: Do not set this option in production!
});

const initOptions = {
  promiseLib: promise
};

// attach to all events at once;
monitor.attach(initOptions, ['query', 'error']);

// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")(initOptions);

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = 'postgres://localhost:5432/database-name';

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

module.exports = db;
```

### Model
- in `model.js` create a pg-promise function called `getCities` for the `/` and `/api/cities` routes with the appropriate method 
- create a pg-promise function called `getCity` for the `/city/:id` route
- export model.js using `module.exports` and be sure to import it into `server.js`
- in `server.js` use the previously created pg-promise functions to get data and output a response
