angular.module('citiesApp')
    .controller('homeController', ['poiService', 'favService', function (poiService, favService) {
        self = this;

        self.sites = []
        self.pois = [] //favs

        // poiService.get()
        // favService.get()
        // self.poiArray = []
        // length = self.pois.length

        // if(self.pois.length <= 0)
        //     self.favExsist = false
        //     else
        //     self.favExsist = true

        // id1 = self.pois[length-1]
        // id2 = self.pois[length-2]
        // setTimeout(function(){
        //     for (i = 0; i < self.sites.length; i++) {
        //         if (self.sites[i].id === id1) {
        //             index1 = i
        //         }
        //         if (self.sites[i].id === id2) {
        //             index2 = i
        //         }
        //     }
    


        // }, 1000)
        // self.poi1 = self.sites[index1]
        // self.poi2 = self.sites[index2]
        // self.poiArray.push(self.poi1)
        // self.poiArray.push(self.poi2)
       
        // self.selectedSite = function (site) {
        //     poiService.setPoi(site)
           
        // }


    }]);
