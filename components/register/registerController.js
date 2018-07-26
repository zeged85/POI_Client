angular.module('citiesApp')
    .controller('registerController', ['$http','$location', function ($http, $location) {

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
           console.log(response.data)
           self.Q1 = response.data.questions[0]
           self.Q2 = response.data.questions[1]
           
           self.countries =response.data.countries
           
            console.log(response.data)
            $location.path('/about')
        }, function (response) {
            //Second function handles error
           // self.login.content = "Something went wrong";
           console.log(response)
        });

        self.submit = function () {
            console.log("selected country:" + self.selectedCountry)
            console.log(self.selectedQ)
            self.country = self.selectedCountry
            let answer1 = ""
            let answer2 = ""
            console.log(self.ans)
            if (self.selectedQ===1){
                answer1 = self.ans
            }
            else{
                answer2 = self.ans
            }
            let user = {
                username : self.username,
                firstname : self.firstName,
                lastname : self.lastName,
                password : self.password,
                email : self.email,
                country : self.country,
                category1 : self.category1,
                category2 : self.category2,
                category3 : self.category3,
                category4 : self.category4,
                answer1 : answer1,
                answer2 : answer2
                
            }

            console.log('User clicked submit with ', user);
            let serverUrl = 'http://localhost:4000/'
            $http.post(serverUrl + "Users/reg", user)
            .then(function (response) {
                //First function handles success
                //self.login.content = response.data.token;
                //setHeadersToken.set(self.login.content)
                console.log(response.data)
                $location.path('/about')
            }, function (response) {
                //Second function handles error
               // self.login.content = "Something went wrong";
               console.log(response)
            });
        };
        

    }]);
