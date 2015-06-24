/**
 * Created by alexander.mann on 6/3/2015.
 */
/**
 * Created by alexander.mann on 6/3/2015.
 */
// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var itinerarySchema = mongoose.Schema({
    userId              : Long,
    departFlightId      : Long,
    returnFlightId      : Long,
    numberOfPassengers  : Number,
    totalPrice          : Double
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Itinerary', itinerarySchema);