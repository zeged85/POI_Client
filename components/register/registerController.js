angular.module('citiesApp')
    .controller('registerController', ['$http', function ($http) {

        self = this;

        self.countries = ['a','b']
        
        self.category1 = false;
        self.category2 = false;
        self.category3 = false;
        self.category4 = false;
        

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
           
           self.countries =response.data.countries
           
            console.log(response.data)

        }, function (response) {
            //Second function handles error
           // self.login.content = "Something went wrong";
           console.log(response)
        });

        self.submit = function () {
            console.log("selected:" + self.selectedCountry)
            self.country = self.selectedCountry
            let user = {
                username : self.username,
                firstName : self.firstName,
                lastName : self.lastName,
                password : self.password,
                email : self.email,
                country : self.country,
                category1 : self.category1,
                category2 : self.category2,
                category3 : self.category3,
                category4 : self.category4,
                answer1 : self.answer1,
                answer2 : self.answer2
                
            }

            console.log('User clicked submit with ', user);
            let serverUrl = 'http://localhost:4000/'
            $http.post(serverUrl + "Users/reg", user)
            .then(function (response) {
                //First function handles success
                //self.login.content = response.data.token;
                //setHeadersToken.set(self.login.content)
                console.log(response.data)

            }, function (response) {
                //Second function handles error
               // self.login.content = "Something went wrong";
               console.log(response)
            });
        };

    }]);
