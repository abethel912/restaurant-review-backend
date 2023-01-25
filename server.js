// DEPENDENCIES
// .env variables
require('dotenv').config()
// import express
const express = require('express')
// create application object
const app = express()
// pull PORT from .env, give default value of 4001
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT ?? 3333
const restaurantRouter = require('./controllers/restaurant.js')

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/restaurant'. restaurantRouter)

// ROUTES

//test route
app.get('/', (req, res) => {
  res.send('hello world')
})

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
