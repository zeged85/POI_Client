angular.module('citiesApp')
    .controller('indexController',['setHeadersToken', function (setHeadersToken) {


        self = this;

        self.userName = "guest"

        self.guest = true

    }]);
