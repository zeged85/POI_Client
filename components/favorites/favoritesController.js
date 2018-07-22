angular.module('citiesApp')
    .controller('favoritesController', ['$http','poiService', function ($http,poiService) {

        self = this

        let serverUrl = 'http://localhost:4000/'

        self.sites = []

        poiService.get()
        console.log('in favs')

        $http.get(serverUrl + "poi/getFavorites")
            .then(function (response) {
                console.log('got my fav')
                //self.reg.content = response.data

                console.log(response.data)
                //$scope.poiCtrl.sites = response.data
                self.pois = response.data
            }, function (response) {
                //self.reg.content = response.data
                //Second function handles error
                //self.reg.content = "Something went wrong";

                console.log("didnt get pois")
                console.log(response)
                // return cities
            });

    
            console.log(1234)
            index = self.sites.indexOf(2,0)
            console.log(self.sites[index])
    }]);