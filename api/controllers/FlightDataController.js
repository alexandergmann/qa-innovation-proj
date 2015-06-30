/**
 * Created by alexander.mann on 6/15/2015.
 */

var Flight = require('../models/flight');
var moment = require('moment');

var hoursOfDay = [ 2, 4, 5, 6, 8, 9, 10 ];
var minutesOfDay = [5, 10, 15, 30, 40, 45, 55];
var prices = [ 220, 350, 180, 70, 500, 1500, 290, 926, 782, 321, 119 ];
var airportsList = {
    StPaulMN: {code: "MSP", name: "Saint Paul, Minnesota (MSP)"},
    PhilPA: {code: "PHL", name: "Philadelphia, Pennsylvania (PHL)"},
    LACA: {code: "LAX", name: "Los Angeles, California (LAX)"}
};

var generateRandomDate = function(originalDate) {
    var daysList = [];
        var randomHour = _.sample(hoursOfDay);
        var randomMinutes = _.sample(minutesOfDay);
        var dateToAdd = moment(originalDate).add(randomHour, 'hours').add(randomMinutes, 'minutes');
        //var day = originalDate.getDate() + i;
        //var dateToAdd = new Date(originalDate.getFullYear(), originalDate.getMonth(),day, randomHour, randomMinutes);
       // daysList.push(dateToAdd);

    var randomDayFromList = _.sample(daysList);

    return dateToAdd;
};

module.exports.searchForFlights = function(req, res) {
    var dateToSearch = new Date(req.dateToSearch);
    var nextDay = dateToSearch.getDate() + 1;
    var upperLimit = new Date(dateToSearch.getFullYear(), dateToSearch.getMonth(), nextDay);

    Flight.find({
        'departingAirport' : req.departingAirport,
        'arrivingAirport' : req.arrivingAirport,
        'departingDate' : {
            $gte:  dateToSearch,
            $lt: upperLimit
        }
    }, function(err, flights) {
        if (err)
            return err;
        res.send(flights);
    });
};

module.exports.populateDB = function(req, res) {
    var flightsAdded = [];
    var today = new Date();
    // define a list with 3 days because it doesn't matter to me how long the flight is
    // but who knows maybe they are okay with taking a 3 day flight from phil to lax or la to st paul
    // loop 1 to used to add days to current date
    for (var i = 0; i < 14; i++) {
        // loop to add flights for each airport
        _.forEach(airportsList, function(departAirport) {
            // loop to add 6 flights total for each day at each airport
            for (var k = 0; k < 6; k++) {
                // Stuff for flight info and date
                var day = today.getDate() + i;
                var departHour = _.sample(hoursOfDay);
                var departMinute = _.sample(minutesOfDay);
                var arrivingAirport = _.sample(airportsList);

                // define date and new flight object
                var departDate = new Date(today.getFullYear(), today.getMonth(), day, departHour, departMinute);
                var arrivingDate = generateRandomDate(departDate);

                // add stuff to new flight object
                var newFlight = new Flight();
                newFlight.destinationAirportName = departAirport.name;
                newFlight.departingAirportName = arrivingAirport.name;
                newFlight.departingDate = departDate;
                newFlight.arrivingDate = arrivingDate;
                newFlight.departingAirport = departAirport.code;
                newFlight.arrivingAirport = arrivingAirport.code;
                newFlight.price = _.sample(prices);

                // save flight to database
                newFlight.save(function (err) {
                    if (err)
                        throw err;
                });

                flightsAdded += newFlight;
            }
        });
    }
    res.json(flightsAdded);
};

module.exports.clearFlights = function(req, res) {
    Flight.remove({}, function(err) {
        if(err)
            return err;
        res.send({message: 'success'});
    });
};
