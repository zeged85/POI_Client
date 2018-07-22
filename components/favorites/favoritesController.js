angular.module('citiesApp')
    .controller('favoritesController', ['$http','poiService','favService', function ($http,poiService,favService) {

        self = this

        let serverUrl = 'http://localhost:4000/'

        self.sites = []
        self.pois = [] //favs
        
        poiService.get()
        favService.get()

        console.log('in favs')
        
        self.selectedSite = function (site) {
            poiService.setPoi(site)
        }



               
            
           



    }]);