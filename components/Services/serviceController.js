

angular.module('citiesApp')
    // .service('myService', function () { this.set = function() {return "hello"} })
    .service('setHeadersToken', ['$http', function ($http) {

        let token = ""

        this.set = function (t) {
            token = t
            $http.defaults.headers.common['x-access-token'] = t
            // $httpProvider.defaults.headers.post[ 'x-access-token' ] = token
            console.log("set")

        }

        this.userName = 'shir'


    }])


    .service('poiService', ['$http', function ($http) {
        let serverUrl = 'http://localhost:4000/'
        self = this
        let fresh = false
        let sites = {
            1 : {name:"Paris", state: "France", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/7c/f2/eiffel-tower-priority.jpg"}
            ,2 : {name:"Jerusalem", state: "Israel", image: "https://cdni.rt.com/files/2017.12/article/5a3fe04efc7e93cd698b4567.jpg"}
            ,3 : {name:"London", state: "England", image: "http://www.ukguide.co.il/Photos/England/London/British-Royal-Tour.jpg"}
        }

        this.get = function(){
            if(fresh===false){
                return $http.get(serverUrl + "poi/getPOIs")
                .then(function (response) {
                    console.log('fgds')
                    //self.reg.content = response.data
                    //console.log(response.data)
                    fresh = true
                    sites=response.data
                    return sites
                    
                }, function (response) {
                    //self.reg.content = response.data
                    //Second function handles error
                    //self.reg.content = "Something went wrong";
                    console.log("didnt get pois")
                   // return cities
                });
            }
            else{
                return Promise.resolve({
                    1 : {name:"Paris", state: "France", image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/7c/f2/eiffel-tower-priority.jpg"}
                    ,2 : {name:"Jerusalem", state: "Israel", image: "https://cdni.rt.com/files/2017.12/article/5a3fe04efc7e93cd698b4567.jpg"}
                    ,3 : {name:"London", state: "England", image: "http://www.ukguide.co.il/Photos/England/London/British-Royal-Tour.jpg"}
                })
            }

        }
    
         
        this.re = function(){
            return sites
        }
    }])

        .controller('serviceController', ['$location', '$http', 'setHeadersToken', 'localStorageModel', function ($location, $http, setHeadersToken, localStorageModel) {


            self = this;

            self.directToPOI = function () {
                $location.path('/poi')
            }

            let serverUrl = 'http://localhost:4000/'

            let user = {
                userName: "Shir",
                password: "abcd",
                isAdmin: true
            }


            self.signUp = function () {
                // register user
                $http.post(serverUrl + "users/", user)
                    .then(function (response) {
                        //First function handles success
                        self.signUp.content = response.data;
                    }, function (response) {
                        //Second function handles error
                        self.signUp.content = "Something went wrong";
                    });
            }

            self.login = function () {
                // register user
                $http.post(serverUrl + "Users/login", user)
                    .then(function (response) {
                        //First function handles success
                        self.login.content = response.data.token;
                        setHeadersToken.set(self.login.content)


                    }, function (response) {
                        //Second function handles error
                        self.login.content = "Something went wrong";
                    });
            }

            self.reg = function () {
                // register user
                $http.post(serverUrl + "users/reg", user)
                    .then(function (response) {
                        //First function handles success
                        self.reg.content = response.data;

                    }, function (response) {
                        self.reg.content = response.data
                        //Second function handles error
                        self.reg.content = "Something went wrong";
                    });
            }

            self.addTokenToLocalStorage = function () {
                localStorageModel.addLocalStorage('token', self.login.content)
            }

            self.getPOIs = function () {
                $http.get(serverUrl + "poi/getPOIs")
                    .then(function (response) {
                        self.reg.content = response.data
                    }, function (response) {
                        self.reg.content = response.data
                        //Second function handles error
                        self.reg.content = "Something went wrong";
                    });
            }


        }]);


