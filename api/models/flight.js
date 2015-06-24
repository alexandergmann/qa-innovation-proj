/**
 * Created by alexander.mann on 6/3/2015.
 */
// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var flightSchema = mongoose.Schema({
    departingAirportName                : String,
    departingDate                       : Date,
    departingAirport                    : String,
    destinationAirportName              : String,
    arrivingDate                        : Date,
    arrivingAirport                     : String,
    price                               : Number
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Flight', flightSchema);