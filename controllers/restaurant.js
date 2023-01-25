const router = require('express').Router();
const Restaurant = require('../model/restaurant.js');


// RESTAURANT INDEX ROUTE
router.get("/", async (req, res) => {
    try {
      // send all restaurants
    res.json(await Restaurant.find({}));
    } catch (error) {
      //send error
    res.status(400).json(error);
    }
});

  // RESTAURANT CREATE ROUTE
router.post("/", async (req, res) => {
    try {
      // send all restaurants
    res.json(await Restaurant.create(req.body));
    } catch (error) {
      //send error
    res.status(400).json(error);
    }
});

  // PEOPLE Update ROUTE
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
    try {
      // send all restaurants
    res.json(await Restaurant.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
    res.status(400).json(error);
    }
});

  // Restaurant Show ROUTE
app.get("/:id", async (req, res) => {
    try {
        // send all restaurants
        res.json(await Restaurant.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
    });

module.exports = router
