const mongoose = require('./connection')


const RestaurantSchema = new mongoose.Schema({
    creator: String,
    name: String,
    image: String,
    address: String,
    type: String
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant