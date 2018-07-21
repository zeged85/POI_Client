angular.module('citiesApp')
    .controller('poiCtrl', ['poiService', function (poiService) {


        self = this;

        //self.cities = {}
       
        //self.cities = poiService.pois

        self.categories = ['ret', '123']
<<<<<<< HEAD
        
       /* self.sites = poiService.get().then(function(data){
            self.sites = data
        })


       self.sites = poiService.allsites
        */
        //console.log(self.sites)

      //  self.allsites=poiService.allsites

        self.sites = []

        poiService.get()
=======



       //self.sites = poiService.allsites
        
        //console.log(self.sites)

        self.selectedSite = function (id) {
            poiService.id = id
        }
>>>>>>> f4482c4710d575014f8833744a97d5de1cc10183
/*
        self.sites = poiService.re()
        
        self.selectedSite = function (site) {
            poiService.setChosenSite(site)
            
*/
        

        

    }])

