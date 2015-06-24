/**
 * Created by alexander.mann on 6/3/2015.
 */
//var app = angular.module('QAFlightPicker');
app.controller('FlightSearchResultsController', function($scope,$state, $http, searchResultsService) {
    var self = this;

    this.sortByPrice = function (array) {
        var sorted = _.sortBy(array, function(ele) {
            return ele.price;
        });
        return sorted;
    };

    this.departingFlights = self.sortByPrice(searchResultsService.departingFlights);
    this.returningFlights = self.sortByPrice(searchResultsService.returningFlights);
    this.selectedDepartingOption = {};
    this.selectedReturningOption = {};

    this.isDepartingOptionSelected = function(item){
        return (item._id == self.selectedDepartingOption._id);
    };

    this.isReturningOptionSelected = function(item){
        return (item._id == self.selectedReturningOption._id);
    };

    this.submitFlightsToConfirm = function() {
        if (self.selectedDepartingOption == null) {
            //TODO throw error here
        } else if (self.selectedReturningOption == null && searchResultsService.returningFlights == null) {
            //TODO throw error here
        }
        searchResultsService.selectedDepartingFlight = self.selectedDepartingOption;
        searchResultsService.selectedReturningFlight = self.selectedReturningOption;
        $state.go('confirmationScreen');
        //
        //$http.post('/bookflight', {
        //    user: userService.user,
        //    numPassengers: searchResultsService.numPassengers,
        //    departingFlight: self.selectedDepartingOption,
        //    returningFlight: self.selectedReturningOption
        //}, {headers: {'Content-Type': 'application/json'}})
        //    .success(function(data) {
        //
        //    });
    };
});
