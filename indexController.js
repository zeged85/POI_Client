angular.module('citiesApp')
    .controller('indexController',['setHeadersToken', 'poiService', function (setHeadersToken,poiService) {


        self = this;

        self.userName = setHeadersToken.userName

    }]);
