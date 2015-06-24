/**
 * Created by alexander.mann on 5/19/2015.
 */
app.controller('PopulateDatabaseController', function($scope, $state, $http, dataPopulationService) {
    var self = this;

    this.populateDBPost = function(){
        $http.post('/populateDatabase', {post: 'data'})
            .success(function() {
                console.log("Database Population Successful");
                dataPopulationService.populate = "true";
                $state.go('search');
            })
            .error(function() {
                dataPopulationService.populate = null;
                console.log("Database Population Failed");
            });
        };
});