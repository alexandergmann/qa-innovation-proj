/**
 * Created by alexander.mann on 5/19/2015.
 */

//var app = angular.module('QAFlightPicker');
app.controller('LoginController', function($scope,$state, $http) {

    $('#dp1').fdatepicker({
        format: 'mm-dd-yyyy'
    });

    var self = this;

    this.signUp = function () {
        $state.go('signUp');
    };

    this.postLogin = function(){
        var formData = {
            'email': self.email,
            'password': self.password
        };

        if(self.email == null || self.password == null)
        {
            self.errorMessage = "Please Enter Email and Password";
        }
        else
        {
            $http(
                {
                    url: '/login',
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
                .success(function() {
                    $state.go('search');
                })
                .error(function(msg) {
                    self.errorMessage ="Incorrect Username or Password";
                });
        }
    };
});



