# PG-PROMISE LAB: A Tale of Two (or 160,000) Cities

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
- Add some data into your database, make sure to run some tests and make sure the database is set up correctly

### Configuration
- now run `npm install --save pg-promise`
- now paste the below code under your `const = express...` code and modify with your port number and database name 

``` js
// Import pg-promise and initialize the library with an empty object.
const pgp = require('pg-promise')({});

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = 'postgres://localhost:5432/database-name';

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);
```

### Make SQL Queries
