
// DEPENDENCIES

// .env variables
require('dotenv').config()
// pull PORT from .env, give default value of 4001
const { PORT = 4001, DATABASE_URL } = process.env
// import express
const express = require('express')
// create application object
const app = express()
// import mongoose
const mongoose = require("mongoose");

// DATABASE CONNECTION

// Establish Connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


// ROUTES

//test route
app.get('/', (req, res) => {
  res.send('hello world')
})


// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
