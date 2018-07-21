angular.module('citiesApp')
    .controller('indexController',['setHeadersToken','$scope', function (setHeadersToken,$scope) {


        self = this;

        self.userName = setHeadersToken.userName

    }]);
