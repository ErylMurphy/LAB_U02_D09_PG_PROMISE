// import dependencies
const express = require('express')
const cityData = require('cities.json')

// set up port
const PORT = 4567

// initialize app
const app = express()

// tell express where to render
app.set('view engine', 'ejs')

// set up api routes
app.get('/api/cities', (request, response) => {
  // query starts after ?
  const page = parseInt(request.query.page)
  let startSlice = 0
  let endSlice = 100
  if (page) {
    startSlice = (page - 1) * 100
    // slice ends at but not including endSlice
    endSlice = startSlice + 100
  }

  response.json(cityData.slice(startSlice, endSlice))
})

// set up views routes
app.get('/', (request, response) => {
  const page = parseInt(request.query.page)
  let startSlice = 0
  let endSlice = 100
  let cities = cityData.slice(startSlice, endSlice)

  if (page) {
    startSlice = (page - 1) * 100
    endSlice = startSlice + 100
    cities = cityData.slice(startSlice, endSlice)
    response.render('cities/index', { cities: cities })
  } else {
    response.render('home/index', { cities: cities })
  }
})

// /city/:id route
app.get('/city/:id', (request, response) => {
  const id = parseInt(request.params.id)
  response.render('cities/city', { city: cityData[id] })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
