/**
 * Created by alexander.mann on 5/21/2015.
 */
/**
 * Created by alexander.mann on 5/19/2015.
 */

//var app = angular.module('QAFlightPicker');
app.controller('SignUpController', function($scope,$state, $http) {
    var self = this;

    this.login = function () {
        $state.go('login');
    };

    this.postSignUp = function(){
        console.log(self.password);
        console.log(self.email);

        if(self.email == null || self.password == null)
        {
            self.errorMessage = "Please enter an email and password";
        }
        else
        {
            var $home = $scope;

            var $a = $http(
                {
                    url: '/signUp',
                    method: "POST",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: {email: self.email, password: self.password}
                })
                .success(function(info) {
                    console.log(info.satus);
                    self.errorMessage ="this works";
                })
                .error(function(req) {
                    self.errorMessage=req;
                });
            console.log($a);

            console.log('sec');

        }
    };
});



