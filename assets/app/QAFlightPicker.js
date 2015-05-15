/**
 * Created by alexander.mann on 5/12/2015.
 */
window.app = angular.module('QAFlightPicker', [
    'ui.router',
    'mm.foundation'
    ]);

    window.app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: '/assets/app/header/a.html'
            })
            .state('logout', {
                url:'home',
                templateUrl: ''
            })
            .state('signup', {
                url: '',
                templateUrl: ''
            })
            .state('myitineraries', {
                url: '',
                templateUrl: ''
            })
            .state('logout')
        //    .state('userInfo', {
        //        url: '/m',
        //        templateUrl: '/assets/app/home/.html',
        //        controller: 'UserInfoController as userInfo'
        //    })
        //    .state('userItineraries', {
        //        url: '/m',
        //        templateUrl: 'assets/app/home/userItineraries.html',
        //        controller: 'UserItinerariesController as userItineraries'
        //    })
    });