/**
 * Created by alexander.mann on 6/22/2015.
 */

var Itinerary            = require('../models/itinerary');
module.exports.bookFlight = function(req, res) {

    var returningFlightId = req.returningFlightId || null;
    var newItinerary = new Itinerary({
        userId:             req.userId,
        departFlightId:     req.departingFlightId,
        returnFlightId:     returningFlightId,
        numberOfPassengers: req.numPassengers,
        totalPrice:         req.totalPrice
    });

    newItinerary.save(function (err, savedIt) {
        if(err)
            throw err;

        res.send(newItinerary);
    })
};