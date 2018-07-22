angular.module('citiesApp')
    .controller('poiCtrl', ['poiService', function (poiService) {


        self = this;

        //self.cities = {}
       
        //self.cities = poiService.pois

        self.categories = ['ret', '123']
       /* self.sites = poiService.get().then(function(data){
            self.sites = data
        })


       self.sites = poiService.allsites
        */
        //console.log(self.sites)

      //  self.allsites=poiService.allsites

        self.sites = []

        poiService.get()


       //self.sites = poiService.allsites
        
        //console.log(self.sites)

        self.selectedSite = function (id) {
            poiService.id = id
        }

/*
        self.sites = poiService.re()
        
      
            
*/
self.selectedSite = function (site) {
    poiService.setPoi(site)
    console.log(site.name)
}
        

    }])

