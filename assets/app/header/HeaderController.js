/**
 * Created by alexander.mann on 5/21/2015.
 */
//var app = angular.module('QAFlightPicker');
app.controller('HeaderController', function($scope,$state, $http, userService, dataPopulationService, searchResultsService) {
    var self = this;

    this.login = function () {
        $state.go('login');
    };

    this.userItineraries = function() {
        $http.post('/getUserItineraries', {
            userId: userService.user._id
        }, {header: { 'Content-Type': 'application/json'}})
            .success(function(data) {
                userService.userItineraries = data;
                console.log('get itin sucess');
                console.log(data);
                $state.go('accountOverview', { userId: userService.user._id })
            });
    };

    this.logout = function() {
        $http.get('/logout')
            .success(function(data) {
                userService.user = null;
                userService.userItineraries = null;
                $state.go('login');
            });
    };

    this.search = function() {
        searchResultsService.selectedDepartingFlight = null;
        searchResultsService.selectedReturningFlight = null;
        searchResultsService.numPassengers = null;
        searchResultsService.totalPrice = null;
        searchResultsService.departingFlights = null;
        searchResultsService.returningFlights = null;
        $state.go('search', {userId: userService.user._id});
    };

    this.userLoggedIn = function(){
        return userService.user != null;
    };

    this.isDatabasePopulated = function() {
        return dataPopulationService.populate != null;
    };

});



