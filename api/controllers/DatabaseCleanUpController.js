/**
 * Created by alexander.mann on 6/25/2015.
 */

var Itinerary = require('../models/itinerary');
var User = require('../models/user');
var Flight = require('../models/flight');

module.exports.clearFlights = function(req, res) {
    Flight.remove({}, function(err) {
        if(err)
          return err;
        res.send({message: 'success'});
    });
};

module.exports.clearItineraries = function(req, res) {
    Itinerary.remove({}, function(err) {
        if(err)
            return(err);
        res.send({message: 'success'});
    });
};

module.exports.clearUsers = function(req, res) {
    User.remove({}, function(err) {
        if(err)
            return(err);
        res.send({message: 'success'});
    });
};