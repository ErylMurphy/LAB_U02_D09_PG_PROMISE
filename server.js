const express = require("express");
const cityData = require("museums.json");

// set up port
const PORT = 4567;

// initialize app
const app = express();

// Server any files in the client folder.
app.use("/client", express.static("client"));

// tell express where to render
app.set("view engine", "ejs");

// set up views routes
app.get("/museums", (request, response) => {
  response.render("museums/index");
});

// set up api routes
app.get("/museums.json", (request, response) => {});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
