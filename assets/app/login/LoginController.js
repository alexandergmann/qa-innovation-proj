/**
 * Created by alexander.mann on 5/19/2015.
 */

window.app.controller('LoginController', function($rootScope, $state) {

    this.signUp = function () {
        $state.go('signUp');
    };

    this.postLogin = function(){

    }


});
