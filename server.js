
// DEPENDENCIES

// .env variables
require('dotenv').config()
// pull PORT from .env, give default value of 4001
const { PORT = 4001 } = process.env
// import express
const express = require('express')
// create application object
const app = express()


// ROUTES

//test route
app.get('/', (req, res) => {
  res.send('hello world')
})


// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
