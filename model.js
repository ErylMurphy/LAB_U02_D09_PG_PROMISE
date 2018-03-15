// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")({});

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = "postgres://localhost:5432/cities_db";

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

const getCities = page => {
  let offset = (page - 1) * 2;
  return db.any("SELECT * FROM cities LIMIT 2 OFFSET $1", [offset]);
};

const getCity = id => {
  return db.one("SELECT * FROM cities WHERE id = $1", [id]);
};

module.exports = {
  getCities: getCities,
  getCity: getCity
};
