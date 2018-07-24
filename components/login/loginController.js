angular.module('citiesApp')
    .controller('loginController', ['poiService','$http', 'setHeadersToken', '$scope', '$location', '$rootScope', 'localStorageModel', function (poiService, $http, setHeadersToken, $scope, $location, $rootScope, localStorageModel) {
        self = this;

        let serverUrl = 'http://localhost:4000/'
        self.sites = []
        poiService.get()
        self.username = "username";
        self.password = "password";

        self.question = "question"

        self.selectedSite = function (site) {
            poiService.setPoi(site)
            console.log(site.name)
           
        }
        

        self.submit = function () {
            let user = {
                username: self.username,
                password: self.password
            }
            console.log('User clicked submit with ', user);

            $http.post(serverUrl + "Users/log", user)
                .then(function (response) {
                    //First function handles success
                    //self.login.content = response.data.token;
                    //setHeadersToken.set(self.login.content)
                    setHeadersToken.set(response.data)
                    $scope.indxCtrl.userName = self.username
                    $scope.indxCtrl.guest = false

                    $rootScope.login = true

                    localStorageModel.removeLocalStorage("username")
                    localStorageModel.addLocalStorage("username", self.username)

                    localStorageModel.removeLocalStorage("token")
                    localStorageModel.addLocalStorage("token", response.data)

                    console.log(response.data)
                    $location.path('/home')

                }, function (response) {
                    //Second function handles error
                    // self.login.content = "Something went wrong";
                    console.log(response)
                });
        };


        self.submitAns = function (ans, user) {
            let pack = {
                username: user,
                answer: ans
            }
            console.log('User clicked submit with ', pack);
            $http.post(serverUrl + "Users/retrievePassword", pack)
                .then(function (response) {
                    self.question = response.data

                }, function (response) {
                    self.question = response.data

                    console.log("user not found")
                    // return cities
                });


        }

        self.recover = false
        self.forgot = function (t) {
            if (self.recover === true)
                self.recover = false
            else if (self.recover === false) {
                self.recover = true
                // self.question = "quest"

                console.log(t)
                let query = "?username=" + t;

                $http.get(serverUrl + "Users/retrievePassword" + query)
                    .then(function (response) {
                        self.question = response.data

                    }, function (response) {
                        self.question = response.data

                        console.log("user not found")
                        // return cities
                    });




            }


        }
        self.randomArray = []
        random1 = Math.floor(Math.random()*self.sites.length - 1)
        random2 =  Math.floor(Math.random()*self.sites.length - 1)
        random3 =  Math.floor(Math.random()*self.sites.length - 1)
        while (random1 == random2 || random2 == random3 || random1 == random3) {
            random1 =1 //Math.floor(Math.random()*1)
            random2 = 2//Math.floor(Math.random()*2)
            random3 =3 //Math.floor(Math.random()*3)
        }

        for (i = 0; i < self.sites.length; i++) {
           // if (self.sites[i].score > 2) {
                if (i == random1) {
                    self.randomArray.push(self.sites[i])
                }
                else if (i == random2) {
                    self.randomArray.push(self.sites[i])
                }
                else if (i == random3) {
                    self.randomArray.push(self.sites[i])
                }
           // }
        }



    }]);
