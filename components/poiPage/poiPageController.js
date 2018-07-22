angular.module('citiesApp')
    .controller('poiPageController', ['poiService','$scope','$rootScope','favService', function (poiService,$scope,$rootScope,favService) {

        self = this;
        // self.sites = []
        // poiService.get()

        self.poi = {}
        //self.poi = poiService.getPoi()

        self.poi = poiService.getPoi()




        
        self.sites = []

        poiService.get()


        self.pois = [] //favs
        favService.get()

    }]) 