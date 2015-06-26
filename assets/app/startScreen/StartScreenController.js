/**
 * Created by alexander.mann on 5/19/2015.
 */
app.controller('StartScreenController', function($scope, $state, $http, dataPopulationService) {
    var self = this;
    this.itinerariesCleared = false;
    this.flightsCleared = false;
    this.usersCleared = false;

    this.areItinerariesCleared = function() {
        return (self.itinerariesCleared);
    };

    this.areFlightsCleared = function() {
        return (self.flightsCleared);
    };

    this.areUsersCleared = function() {
        return (this.usersCleared);
    };

    this.populateDBPost = function(){
        $http.post('/startScreen', {post: 'data'})
            .success(function() {
                dataPopulationService.populate = "true";
                $state.go('login');
            })
            .error(function() {
                dataPopulationService.populate = null;
            });
        };

    this.clearDatabase = function() {
        $http.delete('/deleteItineraries')
            .success(function () {
                self.itinerariesCleared = true;
            });

        $http.delete('/deleteFlights')
            .success(function() {
                self.flightsCleared = true;
            });

        $http.delete('/deleteUsers')
            .success(function() {
                self.usersCleared = true;
            });
    };
});