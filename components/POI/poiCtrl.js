angular.module('citiesApp')

    .controller('poiCtrl', ['poiService','$scope','$rootScope','favService', function (poiService,$scope,$rootScope,favService) {


        self = this;
      //  self.guest =  $scope.indxCtrl.guest
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


        self.pois = [] //favs
        favService.get()

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
    






self.addToFavorits = function(t){
    console.log("adding to fav")
    console.log(t)
    favService.set([1,3,6])

   // self.
}

    }])

