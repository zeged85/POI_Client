angular.module('citiesApp')
    .controller('loginController',['$http','setHeadersToken','$scope', function ($http,setHeadersToken,$scope) {
        self = this;
        
        self.username = "dfgdfg";
        self.password = "";
        

        self.submit = function () {
            let user = {
                username : self.username,
                password : self.password
            }
            console.log('User clicked submit with ', user);
            let serverUrl = 'http://localhost:4000/'
            $http.post(serverUrl + "Users/log", user)
            .then(function (response) {
                //First function handles success
                //self.login.content = response.data.token;
                //setHeadersToken.set(self.login.content)
                setHeadersToken.set(response.data)
                $scope.indxCtrl.username = self.username
                console.log(response.data)

            }, function (response) {
                //Second function handles error
               // self.login.content = "Something went wrong";
               console.log(response)
            });
        };


    }]);
