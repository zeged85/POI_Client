angular.module('citiesApp')
    .controller('poiPageController',['poiService', function(poiService) {

    self = this;
    
    self.getId = function(){
    return poiService.getId()
    }
    self.getId()
    console.log(self.id)
    }]) 