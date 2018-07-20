angular.module('citiesApp')
    .controller('poiPageController' , ['poiService','$http', function (poiService, $http) {

        let serverUrl = 'http://localhost:4000/'
        self = this;
       
        self.sites = poiService.get().then(function(data){
            self.sites = data
        })

        self.sites = poiService.re()
        
        self.selected = poiService.getId()
       
        console.log(self.selected)

        var str = 'poi/getPOIdata?id=' + self.selected
       

        $http.get(serverUrl + str)
        .then(function (response) {
            console.log('fgds1SS')
            //self.reg.content = response.data
            console.log(response.data)  
            reviews=response.data
        }, function (response) {
            console.log("didnt get reviews")
        });



    }])
