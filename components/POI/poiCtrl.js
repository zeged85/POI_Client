angular.module('citiesApp')

    .controller('poiCtrl', ['poiService','$scope','$rootScope','favService','localStorageModel', function (poiService,$scope,$rootScope,favService,localStorageModel) {


        self = this;
      //  self.guest =  $scope.indxCtrl.guest
        //self.cities = {}
       
        //self.cities = poiService.pois
       // favService.getSize()

        self.categories = ['Resturants', 'Parks', 'Academic institutions', 'Cinema', '123']
       /* self.sites = poiService.get().then(function(data){
            self.sites = data
        })

        
       self.sites = poiService.allsites
        */
        //console.log(self.sites)

      //  self.allsites=poiService.allsites

      //favService.getCategories()

        self.sites = []

        poiService.get()

        self.pois = [] //favs
        favService.get()
        self.size = self.pois.length
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
    self.clearFilter = function(){
        self.selectedCategory = ''
    }




self.removeFromFavorites = function(t){
    console.log("removing fav")
    console.log(t.id)
    var index = self.pois.indexOf(t.id);
 
    if (index > -1) {
        self.pois.splice(index, 1);
    }

    localStorageModel.removeLocalStorage("favs")
    localStorageModel.addLocalStorage("favs",self.pois)
}

self.addToFavorits = function(t){
    console.log("adding to fav")
    console.log(t.id)
    //favService.set([1,3,6])
    self.pois.push(t.id)

   // self.

   localStorageModel.removeLocalStorage("favs")
   localStorageModel.addLocalStorage("favs",self.pois)

}

        

    }])

