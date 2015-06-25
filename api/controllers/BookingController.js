/**
 * Created by alexander.mann on 6/22/2015.
 */

var Itinerary = require('../models/itinerary');

module.exports.bookFlight = function(req, res) {
    var newItinerary = new Itinerary();
    newItinerary.userId = req.userId;
    newItinerary.departFlight = req.departingFlightId;
    newItinerary.numberOfPassengers = req.numPassengers;
    newItinerary.totalPrice = req.totalPrice;
    if(req.returningFlightId) {
        newItinerary.returnFlight = req.returningFlightId;
    }
    newItinerary.save(function (err) {
        if(err)
            throw err;
        res.json(newItinerary);
    })
};

module.exports.getUserItineraries = function(req, res) {
    Itinerary.find({
        'userId'    : req.userId
    })
        .populate('departFlight')
        .populate('returnFlight')
        .exec(function(err, itineraries) {
            if (err)
                return err;
            res.send(itineraries);
    });
};