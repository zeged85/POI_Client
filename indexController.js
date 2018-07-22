angular.module('citiesApp')
    .controller('indexController',['setHeadersToken', function (setHeadersToken) {


        self = this
        self.guest = true
        self.userName = "guest"
        
    }]);
