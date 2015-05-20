/**
 * Created by alexander.mann on 5/19/2015.
 */

window.app.controller('LoginController', function($rootScope, $state) {

    var self = this;
    this.password = "";
    this.email = "";

    this.signUp = function () {
        $state.go('signUp');
    };

    this.postLogin = function(){
        console.log(self.password);
        console.log(self.email);
        $http.post('/login')
            .success( function()
            {
                $state.go('profile');
            })
            .error();
    };


});
