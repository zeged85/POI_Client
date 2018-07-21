angular.module('citiesApp')
    .controller('poiCtrl', ['poiService', function (poiService) {


        self = this

        //self.cities = {}
       
        //self.cities = poiService.pois

        //poiService.get()
        
        //self.sites = poiService.get().then(function(data){
        //    self.sites = data
        //})

        self.sites = poiService
        
        console.log(self.sites)

        self.selectedSite = function (id) {
            console.log(id)
            poiService.selected = id
        }

        self.addToCart = function (id, sites) {

            console.log(id)
            console.log(site)
            console.log(self.amount[id])


        }

    }])

