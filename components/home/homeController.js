angular.module('citiesApp')
    .controller('homeController', ['poiService', 'favService','catService', function (poiService, favService,catService) {
        self = this;

        self.sites = []
        self.pois = [] //favs

        poiService.get()
        favService.get()
        self.cats = []
        catService.getCategories()

        self.poiArray = []


        //  calcService.get()


        length = self.pois.length

  

        self.selectedSite = function (site) {
            poiService.setPoi(site)

        }

    
    }]);
