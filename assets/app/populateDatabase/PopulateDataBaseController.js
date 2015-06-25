/**
 * Created by alexander.mann on 5/19/2015.
 */
app.controller('PopulateDatabaseController', function($scope, $state, $http, dataPopulationService) {
    var self = this;

    this.populateDBPost = function(){
        $http.post('/populateDatabase', {post: 'data'})
            .success(function() {
                dataPopulationService.populate = "true";
                $state.go('login');
            })
            .error(function() {
                dataPopulationService.populate = null;
            });
        };
});