angular.module('citiesApp')
    .controller('poiCtrl', ['poiService', function (poiService) {


        self = this;

        //self.cities = {}
       
        //self.cities = poiService.pois

        
        
        self.sites = poiService.get().then(function(data){
            self.sites = data
        })

        self.sites = poiService.re()
        
        self.selectedSite = function (id) {

            console.log(self.selected)
        }

        self.addToCart = function (id, sites) {

            console.log(id)
            console.log(site)
            console.log(self.amount[id])


        }

    }])

