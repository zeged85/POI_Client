angular.module('citiesApp')
    .controller('registerController', ['$http', function ($http) {

        self = this;

        

        let serverUrl = 'http://localhost:4000/'
        $http.get(serverUrl + "Users/reg")
        .then(function (response) {
            //First function handles success
            //self.login.content = response.data.token;
            //setHeadersToken.set(self.login.content)
           // setHeadersToken.set(response.data)
           // $scope.indxCtrl.username = self.username
           self.Q1 = response.data.questions[0]
           self.Q2 = response.data.questions[1]
            console.log(response.data)

        }, function (response) {
            //Second function handles error
           // self.login.content = "Something went wrong";
           console.log(response)
        });

        self.submit = function () {
            let user = {
                username : self.username,
                firstName : self.firstName,
                lastName : self.lastName,
                password : self.password,
                email : self.email,
                country : self.country,


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
