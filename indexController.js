angular.module('citiesApp')
    .controller('indexController',['setHeadersToken','localStorageModel','$location','$rootScope','$scope','favService', function (setHeadersToken,localStorageModel,$location,$rootScope,$scope,favService) {



        self = this;

        self.userName = "guest"

        self.guest = true

        var username = localStorageModel.getLocalStorage("username")
        if (username){
            console.log(username)
            self.userName = username
           // self.guest=false
        }

        var token = localStorageModel.getLocalStorage("token")
        if (token){
            console.log(token)
            if (username){
            self.token = token
            setHeadersToken.set(token)
            self.guest = false

            //self.login = true
            $rootScope.login = true
            $location.path('/home')
            }
            else{
                localStorageModel.removeLocalStorage("token")
                localStorageModel.removeLocalStorage("favs")
            }
        }


        self.logOut = function(){
            localStorageModel.removeLocalStorage("username")
            localStorageModel.removeLocalStorage("token")
            //localStorageModel.removeLocalStorage("favs")
            favService.reset()
            $rootScope.login = false

            
            setHeadersToken.set(undefined)
            $scope.indxCtrl.userName = "guest"
            console.log(self.userName)
            self.guest = true
            $location.path('/log')

        }
    }]);
