angular.module('citiesApp')
    .controller('poiPageController', ['poiService','$scope','$rootScope', function (poiService,$scope,$rootScope) {

        self = this;
        // self.sites = []
        // poiService.get()

        self.poi = {}
        //self.poi = poiService.getPoi()

        self.poi = poiService.getPoi()

    }]) 