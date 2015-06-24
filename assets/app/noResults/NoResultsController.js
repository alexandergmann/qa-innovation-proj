/**
 * Created by alexander.mann on 6/22/2015.
 */
app.controller('NoResultsController', function($scope,$state, $http) {
    var self = this;
    this.backToSearch = function(){
        $state.go('search');
    };
});