/**
 * Created by alexander.mann on 5/8/2015.
 */
//app.controller('HomeController', function($state, data) {
//    var self = this;
//
//    this.myFlights = function (userId) {
//        data.myFlights(userId)
//            .then(function (userInfo) {
//                $state.go('userFlights', {infoId: userInfo.userId});
//            });
//
//    };
//
//    this,checkAvailable = function (dateTimeAirport) {
//        data.checkAvailable(dateTimeAirport)
//            .then(function (flights) {
//                $state.go('flights', {airport: flights.airportId});
//            });
//    };
//
//    this.userInfo = function (userId) {
//        data.userInfo(userId)
//            .then(function (userInfo) {
//                $state.go('userInfo', {userId: userInfo.userId})
//            })
//    }
//});