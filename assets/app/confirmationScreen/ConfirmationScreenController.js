/**
 * Created by alexander.mann on 6/24/2015.
 */
app.controller('ConfirmationScreenController', function($scope,$state, $http, searchResultsService, userService) {
    var self = this;

    this.selectedDepartFlight = searchResultsService.selectedDepartingFlight;
    this.selectedReturnFlight = searchResultsService.selectedReturningFlight;
    this.numPassengers = searchResultsService.numPassengers;

    var returningTotalPrice = 0;
    if(self.selectedReturnFlight == null) {
        returningTotalPrice = self.selectedReturnFlight.price * self.numPassengers;
    }
    this.totalPrice = (self.selectedDepartFlight.price * self.numPassengers) + returningTotalPrice;

    this.backToResults = function() {
        searchResultsService.selectedDepartingFlight = null;
        searchResultsService.selectedReturningFlight = null;

        $state.go('flightSearchResults');
    };

    this.saveItinerary = function() {
        $http.post('/bookFlight', {
            userId:               userService.user._id,
            numPassengers:      self.numPassengers,
            departingFlightId:    self.selectedDepartFlight._id,
            returningFlightId:    self.selectedReturnFlight._id,
            totalPrice:         self.totalPrice
        }, {headers: {'Content-Type': 'application/json'}})
            .success(function(data) {
                console.log("Successfully Booked!!!!");
            });
    };

});