angular.module('citiesApp')
    .controller('indexController',['setHeadersToken','localStorageModel','$location','$rootScope','$scope', function (setHeadersToken,localStorageModel,$location,$rootScope,$scope) {



        self = this;

        self.userName = "guest"

        self.guest = true

        var username = localStorageModel.getLocalStorage("username")
        if (username){
            self.userName = username
           // self.guest=false
        }

        var token = localStorageModel.getLocalStorage("token")
        if (token){
            self.token = token
            setHeadersToken.set(token)
            self.guest = false

            //self.login = true
            $rootScope.login = true
            $location.path('/home')
        }


        self.logOut = function(){
            localStorageModel.removeLocalStorage("username")
            localStorageModel.removeLocalStorage("token")
            $rootScope.login = false

            
            setHeadersToken.set(undefined)
            $scope.indxCtrl.userName = "guest"
            console.log(self.userName)
            self.guest = true
            $location.path('/log')

        }
    }]);
