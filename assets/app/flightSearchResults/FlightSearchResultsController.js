/**
 * Created by alexander.mann on 6/3/2015.
 */
//var app = angular.module('QAFlightPicker');
app.controller('FlightSearchResultsController', function($scope,$state, $http, searchResultsService, userService) {
    var self = this;
    this.selectedFlight = {};
    this.selectedReturningOption = {};
    this.missingFlightSelection = false;

    this.sortByPrice = function (array) {
        var sorted = _.sortBy(array, function(ele) {
            return ele.price;
        });
        return sorted;
    };

    this.getFlightsToDisplay = function() {
        if (searchResultsService.selectedDepartingFlight) {
            return self.sortByPrice(searchResultsService.departingFlights);
        } else {
            return self.sortByPrice(searchResultsService.returningFlights);
        }
    };

    this.selectingDepartingFlight = function() {
        // if none then you are selecting depart if true then you're not
        if(!searchResultsService.selectedDepartingFlight) {
            return true;
        }
        else {
            return false;
        }
    };

    this.isSelectedFlight = function(item){
        return (item._id == self.selectedFlight._id);
    };

    this.backToDepartingFlights = function() {
        searchResultsService.selectedDepartingFlight = null;
    };

    this.submitFlightsToConfirm = function() {
        if (angular.equals({},self.selectedFlight)) {
            this.missingFlightSelection = true;
        } else if (searchResultsService.roundTrip && !searchResultsService.selectedDepartingFlight) {
                self.missingFlightSelection = false;
                searchResultsService.selectedDepartingFlight = self.selectedFlight;
                $state.go('flightSearchResults', {userId: userService.user._id});
        } else {
                searchResultsService.selectedReturningFlight = self.selectedFlight;
                var returnPrice = searchResultsService.selectedReturningFlight.price || 0;
                searchResultsService.totalPrice = ((((returnPrice + searchResultsService.selectedDepartingFlight.price) * searchResultsService.numPassengers) * 3)/2);
                $state.go('confirmationScreen', {userId: userService.user._id});
        }
    };
});
