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
            templateUrl: '/assets/app/login/login.html',
            controller: 'LoginController as login'
        })
        .state('logout', {
            url:'/home',
            templateUrl: 'a'
        })
        .state('signUp', {
            url: '/signUp',
            templateUrl: '/assets/app/signUp/signUp.html',
            controller: 'SignUpController as signUp'
        })
        .state('/myitineraries', {
            url: 'a',
            templateUrl: 'a'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'assets/app/profile/profile.html'
        })
        .state('logging', {
            url: '/login',
            templateUrl: '/assets/app/login/login.html'
        })
        .state('search', {
            url: '/ss',
            templateUrl: '/assets/app/flightSearch/flightSearch.html'
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


//app.factory('User', function ($resource) {
//    return $resource('/auth/users/:id/', {},
//        {
//            'update': {
//                method: 'PUT'
//            }
//        });
//});
//
//app.factory('Session', function ($resource) {
//    return $resource('/auth/session/');
//});
//
//
//
//
//app.factory('Auth', function Auth($location, $rootScope, Session, User, $cookieStore) {
//    $rootScope.currentUser = $cookieStore.get('user') || null;
//    $cookieStore.remove('user');
//
//    return {
//
//        login: function(provider, user, callback) {
//            var cb = callback || angular.noop;
//            Session.save({
//                provider: provider,
//                email: user.email,
//                password: user.password,
//                rememberMe: user.rememberMe
//            }, function(user) {
//                $rootScope.currentUser = user;
//                return cb();
//            }, function(err) {
//                return cb(err.data);
//            });
//        },
//
//        logout: function(callback) {
//            var cb = callback || angular.noop;
//            Session.delete(function(res) {
//                    $rootScope.currentUser = null;
//                    return cb();
//                },
//                function(err) {
//                    return cb(err.data);
//                });
//        },
//
//        createUser: function(userinfo, callback) {
//            var cb = callback || angular.noop;
//            User.save(userinfo,
//                function(user) {
//                    $rootScope.currentUser = user;
//                    return cb();
//                },
//                function(err) {
//                    return cb(err.data);
//                });
//        },
//
//        currentUser: function() {
//            Session.get(function(user) {
//                $rootScope.currentUser = user;
//            });
//        }
//    }
//});
//
