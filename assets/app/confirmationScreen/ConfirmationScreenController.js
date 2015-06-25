/**
 * Created by alexander.mann on 6/24/2015.
 */
app.controller('ConfirmationScreenController', function($scope,$state, $http, searchResultsService, userService) {
    var self = this;

    this.selectedDepartFlight = searchResultsService.selectedDepartingFlight;
    this.selectedReturnFlight = searchResultsService.selectedReturningFlight;
    this.numPassengers = searchResultsService.numPassengers;
    this.totalPrice = searchResultsService.totalPrice;

    this.backToResults = function() {
        searchResultsService.selectedDepartingFlight = null;
        searchResultsService.selectedReturningFlight = null;

        $state.go('flightSearchResults');
    };

    this.isRoundTrip = function() {
        return searchResultsService.roundTrip;
    };

    this.saveItinerary = function() {
        $http.post('/bookFlight', {
            userId:               userService.user._id,
            numPassengers:      this.numPassengers,
            departingFlightId:    self.selectedDepartFlight._id,
            returningFlightId:    self.selectedReturnFlight._id,
            totalPrice:         this.totalPrice
        }, {headers: {'Content-Type': 'application/json'}})
            .success(function(data) {
                searchResultsService.departingFlights = null;
                searchResultsService.returningFlights = null;
                searchResultsService.selectedDepartingFlight = null;
                searchResultsService.selectedReturningFlight = null;
                searchResultsService.numPassengers = null;
                searchResultsService.totalPrice = null;
            });

        $http.post('/getUserItineraries', {
            userId: userService.user._id
        }, {header: { 'Content-Type': 'application/json'}})
            .success(function(data) {
                userService.userItineraries = data;
                $state.go('accountOverview', {userId: userService.user._id})
            });

        };
});