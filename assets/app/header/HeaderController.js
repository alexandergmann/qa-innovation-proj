/**
 * Created by alexander.mann on 5/21/2015.
 */
//var app = angular.module('QAFlightPicker');
app.controller('HeaderController', function($scope,$state, userService, dataPopulationService) {
    var self = this;

    this.login = function () {
        $state.go('login');
    };

    this.myItineraries = function() {
        $state.go('myItineraries');
    };

    this.logout = function() {
        $state.go('logout');
    };

    this.search = function() {
        $state.go('search');
    };

    this.userLoggedIn = function(){
        return userService.user != null;
    };

    this.isDatabasePopulated = function() {
        return dataPopulationService.populate != null;
    };

});



