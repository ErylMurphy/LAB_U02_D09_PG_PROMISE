// import dependencies
const express = require("express");
const cityData = require("cities.json");
const model = require("./model");
const getCities = model.getCities;
const getCity = model.getCity;
// set up port
const PORT = 4567;

// initialize app
const app = express();

// tell express where to render
app.set("view engine", "ejs");

// set up api routes
app.get("/api/cities", (request, response) => {
  const page = request.query.page || 1;
  getCities(page).then(citiesFromDB => {
    response.json(citiesFromDB);
  });
});

// set up views routes
app.get("/", (request, response) => {
  const page = parseInt(request.query.page) || 1;
  getCities(page).then(cities => {
    response.render("cities/index", { cities: cities });
  });
});

// /city/:id route
app.get("/city/:id", (request, response) => {
  const id = parseInt(request.params.id);
  getCity(id).then(cityData => {
    response.render("cities/city", { city: cityData });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
