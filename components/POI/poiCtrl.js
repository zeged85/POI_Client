angular.module('citiesApp')
    .controller('poiCtrl', ['poiService','$rootScope', function (poiService,$rootScope) {


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
/*
        self.sites = poiService.re()
        
        self.selectedSite = function (site) {
            poiService.setChosenSite(site)
            
*/
        

        

    }])

