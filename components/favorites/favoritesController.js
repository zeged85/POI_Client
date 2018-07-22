angular.module('citiesApp')
    .controller('favoritesController', ['$http','poiService','favService','localStorageModel', function ($http,poiService,favService,localStorageModel) {

        self = this

        let serverUrl = 'http://localhost:4000/'

        self.sites = []
        self.pois = [] //favs
        
        poiService.get()
        favService.get()

        console.log('in favs')
        
        self.selectedSite = function (site) {
            poiService.setPoi(site)
        }


        self.saveFva = function(){
            console.log("saving favs to DB")
            favService.set(self.pois)
        }

        self.remove = function(t){
            console.log('remove')
            console.log(t.id)
            console.log(typeof(self.pois))


            var index = self.pois.indexOf(t.id);
 
            if (index > -1) {
                self.pois.splice(index, 1);
            }

            localStorageModel.removeLocalStorage("favs")
            localStorageModel.addLocalStorage("favs",self.pois)

            //self.pois.remove(t.id)
        }
     
    }]);