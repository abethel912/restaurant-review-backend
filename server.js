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
const authRouter = require('./controllers/user')

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// ROUTES

//test route
app.get('/', (req, res) => {
  res.send('hello world')
})


app.use('/restaurant', restaurantRouter)
app.use('/auth', authRouter)


// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
