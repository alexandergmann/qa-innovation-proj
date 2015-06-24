/**
 * Created by alexander.mann on 5/12/2015.
 */

var app = angular.module('QAFlightPicker', [
    'ui.router',
    'mm.foundation'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('populateDatabase', {
                url: '/',
                templateUrl: '/assets/app/populateDatabase/populateDatabase.html',
                controller: 'PopulateDatabaseController as popDbController'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/assets/app/login/login.html',
                controller: 'LoginController as login'
            })
            .state('logout', {
                url:'/logout',
                templateUrl: 'a'
            })
            .state('signUp', {
                url: '/signUp',
                templateUrl: '/assets/app/signUp/signUp.html',
                controller: 'SignUpController as signUp'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'assets/app/profile/profile.html'
            })
            .state('search', {
                url: '/home/{userId}',
                templateUrl: '/assets/app/flightSearch/flightSearch.html',
                controller: 'SearchController as search'
            })
            .state('flightSearchResults', {
                url: '/flightSearchResults',
                templateUrl: 'assets/app/flightSearchResults/flightSearchResults.html',
                controller: 'FlightSearchResultsController as flightSearchResults'
            })
            .state('noResults', {
                url: '/noResults',
                templateUrl: 'assets/app/noResults/noResults.html',
                controller: 'NoResultsController as noResults'
            });
    });
    //.run(function ($rootScope, $document) {
    //    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
    //        $rootScope.userId = toParams.userId || null;
    //        $rootScope.$broadcast('userId', $rootScope.userId);
    //    });
    //});



//app.factory('HeaderLogin', function() {
//    var loggedIn = false;
//    return {
//        loggedIn: function() { return title; },
//        setLoggedIn: function(newLogin) { loggedIn = newLogin; }
//    };
//}

app.factory("userService", function () {
    return {
        user: null
    };
});

app.factory("dataPopulationService", function() {
    return {
        populate: null
    };
});

app.factory("searchResultsService", function () {
    return {
        departingFlights: null,
        returningFlights: null,
        numPassengers: null
    };
});

app.filter("formatAsDate", function () {
    return function (item) {
        var valueAsDate = moment(item);
        return (valueAsDate).format("MM/DD/YYYY");
    };
});

app.filter("formatAsDateDetail", function () {
    return function (item) {
        var valueAsDate = moment(item);
        return (valueAsDate).format("MMMM Do YYYY, h:mm A");
    };
});