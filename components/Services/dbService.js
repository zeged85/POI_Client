angular.module('citiesApp')
.service('poiService', ['$http', function ($http) {
    let serverUrl = 'http://localhost:4000/'
    self = this


    self.allsites = [
        {id : 1, name: "Paris", state: "France", pic: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/7c/f2/eiffel-tower-priority.jpg" },
        {id: 2, name: "Jerusalem", state: "Israel", pic: "https://cdni.rt.com/files/2017.12/article/5a3fe04efc7e93cd698b4567.jpg" },
        {id: 3, name: "London", state: "England", pic: "http://www.ukguide.co.il/Photos/England/London/British-Royal-Tour.jpg" }
    ]

    self.get = function(){
        return self.allsites
    }


    $http.get(serverUrl + "poi/getPOIs")
        .then(function (response) {
            console.log('fgds')
            //self.reg.content = response.data
            //console.log(response.data)
            self.sites=response.data
            self.allsites=response.data
            console.log("got pois")
            console.log(self.sites)
            //$scope.poiCtrl.sites = response.data

        }, function (response) {
            //self.reg.content = response.data
            //Second function handles error
            //self.reg.content = "Something went wrong";
            
            console.log("didnt get pois")
            // return cities
        });

        self.id = 1
        self.setId = function(id){
            this.id = id
            console.log(id)
            console.log(this.self.id)
        }

        self.getId = function(){
            return this.id
        }


}])
