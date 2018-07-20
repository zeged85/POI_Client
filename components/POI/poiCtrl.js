angular.module('citiesApp')
    .controller('poiCtrl', ['poiService', function (poiService) {


        self = this;

        self.cities = {
           
        }

       
        self.cities = poiService.pois

      

        

        self.selectedCity = function (id) {

            console.log(self.selected)
        }

        self.addToCart = function (id, city) {

            console.log(id)
            console.log(city)
            console.log(self.amount[id])


        }

    }])

