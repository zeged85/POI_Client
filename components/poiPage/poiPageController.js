angular.module('citiesApp')
    .controller('poiPageController', ['poiService', function (poiService) {

        self = this;
        // self.sites = []
        // poiService.get()

        self.poi = {}
        //self.poi = poiService.getPoi()

        poiService.getPoi()

    }]) 