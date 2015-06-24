/**
 * Created by alexander.mann on 6/22/2015.
 */


module.exports.bookFlight = function(req, res) {
    var returningTotalPrice = 0;
    if(req.returningFlight == null) {
        returningTotalPrice = req.returningFlight.price * req.numPassengers;
    }
    var totalPrice = (req.departingFlight * req.numPassengers) + returningTotalPrice;
    
    var newItinerary = new Itinerary({
        userId:             req.user._id,
        departFlightId:     req.departingFlight._id,
        returnFlightId:     req.returningFlight._id,
        numberOfPassengers: req.numPassengers,
        totalPrice:         totalPrice
    });

    newItinerary.save(function (err, savedIt) {
        if(err)
            throw err;

        res.send(newItinerary);
    })
};