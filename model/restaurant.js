const mongoose = require('./connection')


const RestaurantSchema = new mongoose.Schema({
    name: String,
    image: String,
    address: String,
    type: String,
    rating: Number
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant