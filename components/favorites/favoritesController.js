angular.module('citiesApp')
    .controller('favoritesController', ['$http', 'poiService', 'favService', 'localStorageModel', function ($http, poiService, favService, localStorageModel) {

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


        self.saveFva = function () {
            console.log("saving favs to DB")
            favService.set(self.pois)
        }

        self.remove = function (t) {
            console.log('remove')
            console.log(t.id)
            console.log(typeof (self.pois))


            var index = self.pois.indexOf(t.id);

            if (index > -1) {
                self.pois.splice(index, 1);
            }

            localStorageModel.removeLocalStorage("favs")
            localStorageModel.addLocalStorage("favs", self.pois)

            //self.pois.remove(t.id)
        }
        self.favArray

        self.moveUp = function (fav) {
           
            indexInFav = self.pois.indexOf(fav.id)
            if(indexInFav>0){
            id1 = fav.id
            id2 = self.pois[indexInFav - 1]
            for (i = 0; i < self.sites.length; i++) {
                if (self.sites[i].id === id1) {
                    index1 = i
                }
                if (self.sites[i].id === id2) {
                    index2 = i
                }
            }
            temp = self.sites.splice(index2, 1)
            self.sites.splice(index1, 0,temp[0])

            temp = self.pois.splice(indexInFav-1,1)
            self.pois.splice(indexInFav,0,temp[0])
            //self.sites.splice(index1, 0, temp[0])
        }
        }

        self.moveDown = function (fav) {
            indexInFav = self.pois.indexOf(fav.id)
            if(indexInFav<self.sites.length-1){
            id1 = fav.id
            id2 = self.pois[indexInFav + 1]
            for (i = 0; i < self.sites.length; i++) {
                if (self.sites[i].id === id1) {
                    index1 = i
                }
                if (self.sites[i].id === id2) {
                    index2 = i
                }
            }
            temp = self.sites.splice(index2, 1)
            self.sites.splice(index1, 0,temp[0])

            temp = self.pois.splice(indexInFav+1,1)
            self.pois.splice(indexInFav,0,temp[0])
        }
        }

    }]);