/**
 * Created by alexander.mann on 5/12/2015.
 */
var app = angular.module('QAFlightPicker', [
    'ui.router',
    'mm.foundation'
    ]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
               url: '/',
               templateUrl: '/assets/app/login/login.html'
           })
           .state('logout', {
               url:'/home',
               templateUrl: 'a'
           })
           .state('signUp', {
               url: '/signUp',
               templateUrl: '/assets/app/signUp/signUp.html'
           })
           .state('/myitineraries', {
               url: 'a',
               templateUrl: 'a'
           })
           .state('profile', {
            url: '/profile',
            templateUrl: 'assets/app/profile/profile.html'
        });

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

app.controller('LoginController', function($scope,$state) {
    this.signUp = function () {
        $state.go('signUp');
    }
});

window.app = app;
