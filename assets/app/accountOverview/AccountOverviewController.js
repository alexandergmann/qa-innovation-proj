/**
 * Created by alexander.mann on 6/25/2015.
 */
app.controller('AccountOverviewController', function($scope,$state, $http, userService) {
    var self = this;

    this.user = userService.user.local;


    this.userItineraries = userService.userItineraries;

    this.hasReturnFlight = function(itinerary) {
        if(itinerary.returnFlight == null) {
            return false;
        } else {
            return true;
        }
    };

    this.searchForFlights = function() {
        $state.go('search', {userId: userService.user._id})
    }

});