angular.module('citiesApp')
    .controller('poiPageController', ['poiService', function (poiService) {

        
        self.sites = poiService.get().then(function(data){
            sites = []
            self.sites = data
        })

        self.getId = function(){
           self.id = poiService.getId()
        }

        self.find = function(id){
            self.site = sites.indexOf(id)
        }
        
        self.find(self.id)
        








    }])