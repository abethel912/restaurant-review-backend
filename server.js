
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
// import middlware
const cors = require("cors");
const morgan = require("morgan");


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

  ///////////////////////////////
// MODELS
////////////////////////////////
const ReviewSchema = new mongoose.Schema({
  rating: Number,
  review: String
},
  { timestamps: true }
)

const Review = mongoose.model("Review", ReviewSchema)

const RestaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  address: String,
  review: [Review]
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies


// ROUTES

//test route
app.get('/', (req, res) => {
  res.send('hello world')
})

// RESTAURANT INDEX ROUTE
app.get("/restaurant", async (req, res) => {
  try {
    // send all restaurants
    res.json(await Restaurant.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// RESTAURANT CREATE ROUTE
app.post("/restaurant", async (req, res) => {
  try {
    // send all restaurants
    res.json(await Restaurant.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// PEOPLE Update ROUTE
app.put("/restaurant/:id", async (req, res) => {
  try {
    // send all restaurants
    res.json(
      await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Restaurant Delete ROUTE
app.delete("/restaurant/:id", async (req, res) => {
  try {
    // send all restaurants
    res.json(await Restaurant.findByIdAndDelete(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Restaurant INDEX ROUTE
app.get("/RESTAURANT/:id", async (req, res) => {
    try {
      // send all restaurants
      res.json(await Restaurant.findById(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });



// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
