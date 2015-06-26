/**
 * Created by alexander.mann on 6/3/2015.
 */
//var app = angular.module('QAFlightPicker');
app.controller('FlightSearchResultsController', function($scope,$state, $http, searchResultsService, userService) {
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
    this.missingFlightSelection = false;

    this.noReturnFlightsSearched = function() {
        return(searchResultsService.roundTrip)
    };

    this.isDepartingOptionSelected = function(item){
        return (item._id == self.selectedDepartingOption._id);
    };

    this.isReturningOptionSelected = function(item){
        return (item._id == self.selectedReturningOption._id);
    };

    this.submitFlightsToConfirm = function() {
        if (!self.selectedDepartingOption) {
            this.missingFlightSelection = true;
        } else if (!self.selectedDepartingOption && searchResultsService.roundTrip) {
            this.missingFlightSelection = true;
        } else {
            searchResultsService.selectedDepartingFlight = self.selectedDepartingOption;
            searchResultsService.selectedReturningFlight = self.selectedReturningOption;
            var returnPrice = self.selectedReturningOption.price || 0;
            searchResultsService.totalPrice = ((((returnPrice + self.selectedDepartingOption.price) * searchResultsService.numPassengers) * 3)/2);
            $state.go('confirmationScreen', {userId: userService.user._id});
        }
    };
});
