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

        self.index1 = -1
        self.index2 = -1
        i=0


        for (i = 0; i < self.sites.length; i++) {
            if (self.sites[i].category == self.cats[0] && self.index1 == '')
                self.index = i
            if (self.sites[i].category == self.cats[1] && self.index1 == '')
                self.index2 = i
        }
        console.log(self.index1)
    }]);
