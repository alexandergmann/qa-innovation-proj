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
            .state('startScreen', {
                url: '/',
                templateUrl: '/assets/app/startScreen/startScreen.html',
                controller: 'StartScreenController as startScreen'
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
            .state('search', {
                url: '/home/:userId',
                templateUrl: '/assets/app/flightSearch/flightSearch.html',
                controller: 'SearchController as search'
            })
            .state('flightSearchResults', {
                url: '/flightSearchResults/:userId',
                templateUrl: 'assets/app/flightSearchResults/flightSearchResults.html',
                controller: 'FlightSearchResultsController as flightSearchResults'
            })
            .state('noResults', {
                url: '/noResults/:userId',
                templateUrl: 'assets/app/noResults/noResults.html',
                controller: 'NoResultsController as noResults'
            })
            .state('confirmationScreen', {
                url: '/confirmation/:userId',
                templateUrl: '/assets/app/confirmationScreen/confirmationScreen.html',
                controller: 'ConfirmationScreenController as confirmationScreen'
            })
            .state('accountOverview', {
                url: '/accountOverview/:userId',
                templateUrl: '/assets/app/accountOverview/accountOverview.html',
                controller: 'AccountOverviewController as accountOverview'
            });
    });

app.factory("userService", function () {
    return {
        user: null,
        userItineraries: null
    };
});

app.factory("dataPopulationService", function() {
    return {
        populate: null
    };
});

app.factory("searchResultsService", function () {
    return {
        roundTrip: true,
        departingFlights: null,
        returningFlights: null,
        numPassengers: null,
        selectedDepartingFlight: null,
        selectedReturningFlight: null,
        totalPrice: null
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