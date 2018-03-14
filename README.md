# Express homework: A Tale of Two (or 160,000) Cities

Create an Express web server in `server.js` that listens on port `4567`

Install and use the `cities.json` package to create your own web server that shows information about cities around the world in a few different pages.

The web server should serve these endpoints:

- GET `/api/cities` should respond with a JSON array of the first 100 cities (0-99 in an array) in the cities.json
- GET `/api/cities?page=2` should respond with a JSON array of the next 100 cities (100-199) in the cities.json. Read [the Express documentation on how to access query string parameter data](http://expressjs.com/en/api.html#req.query) to access `page`
- GET `/api/cities?page=3` should respond with a JSON array of the next 100 cities (200-299) in the cities.json
- GET `/api/cities?page=X` should respond similarly for any number `X`
- GET `/` should respond with HTML that renders information about the first 100 cities (0-99). A file `views/home/index.ejs` should loop over the first 100 cities, and render just the name of each city.
- GET `/?page=1` should respond with HTML that renders information about the next 100 cities (100-199) in a manner simlar to the `GET /` route.
- GET `/?page=X` should respond similarly for any number `X`
- GET `/city/:id` should render the name, country code, latitude, and longitude for each city.

BONUS

- Render a google map of each country's location on a Google Map embedded in the page. See [the Google Maps Embed API documentation](https://developers.google.com/maps/documentation/embed/).
