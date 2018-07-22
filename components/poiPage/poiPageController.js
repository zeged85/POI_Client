angular.module('citiesApp')
    .controller('poiPageController', ['poiService','$scope','$rootScope','favService','localStorageModel', function (poiService,$scope,$rootScope,favService,localStorageModel) {

        self = this;
        // self.sites = []
        // poiService.get()

        self.poi = {}
        //self.poi = poiService.getPoi()

        self.poi = poiService.getPoi()




        
        self.sites = []

        poiService.get()


        self.pois = [] //favs
        favService.get()

        self.addToFavorits = function(t){
            console.log("adding to fav")
            console.log(t)
            //favService.set([1,3,6])
            self.pois.push(t)
        
           // self.
        
           localStorageModel.removeLocalStorage("favs")
           localStorageModel.addLocalStorage("favs",self.pois)
        
        }


        self.removeFromFavorites = function(t){
            console.log("removing fav")
            console.log(t)
            var index = self.pois.indexOf(t);
         
            if (index > -1) {
                self.pois.splice(index, 1);
            }
        
            localStorageModel.removeLocalStorage("favs")
            localStorageModel.addLocalStorage("favs",self.pois)
        }

    }]) 