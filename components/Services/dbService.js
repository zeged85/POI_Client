angular.module('citiesApp')
    .service('poiService', ['$http', function ($http) {
        let serverUrl = 'http://localhost:4000/'
        self = this

        console.log("db service init")
        let mysites = [
            { id: 1, name: "austrelian soldier park", pic: "https://images.haarets.co.il/image/upload/w_2581,h_1499,x_61,y_0,c_crop,g_north_west/w_1105,h_640,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/v1524983168/1.6034104.1782772843.jpg" },
            { id: 2, name: "globus max", pic: "http://branza.co.il/assets/uploads/articles/horizontal_big/459f3e31422e2110bf03eddc410c690a.jpg" },
            { id: 3, name: "ben gurion univresity", pic: "http://www.maariv.co.il/HttpHandlers/ShowImage.ashx?id=390762&w=758&h=530" },
            { id: 4, name: "shushana", pic: "https://www.rol.co.il/images/sites/shoshana/image-1.jpg" }
        ]

        let fresh = false

        //self.get = function(){
        //    return self.allsites
        //}
        // self.set = function(t){
        //     allsites = t
        // }
        self.get = function () {
            if (fresh === false) {
                fresh = true;
                $http.get(serverUrl + "poi/getPOIs")
                    .then(function (response) {
                        console.log('fgds')
                        //self.reg.content = response.data
                        //console.log(response.data)
                        //  self.sites=response.data
                        //for (x in response.data){self.allsites.push(x)}
                        self.sites = response.data



                        mysites = response.data
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
            }
            else {
                self.sites = mysites
            }
        }

        let poiInDb = {}

        self.setPoi = function (poi) {
            poiInDb = poi
            console.log(poiInDb)
            //   console.log(self.poi.name)
            self.poi = poiInDb

        }


        self.getPoi = function () {
            self.poi = poiInDb
            console.log(1234)
            console.log(poiInDb)
            //console.log(self.poii.name)
            return poiInDb
        }



    }])

    // .service('calcService', ['poiService', 'favService', function (poiService, favService) {
    //     self = this

    //     self.sites = []
    //     self.pois = [] //favs

    //     poiService.get()
    //     favService.get()

    //     length = self.pois.length

    //     self.get = function () {
    //         if (self.pois.length <= 0)
    //             self.favExsist = false
    //         else
    //             self.favExsist = true

    //         id1 = self.pois[length - 1]
    //         id2 = self.pois[length - 2]

    //             for (i = 0; i < self.sites.length; i++) {
    //                 if (self.sites[i].id === id1) {
    //                     index1 = i
    //                 }
    //                 if (self.sites[i].id === id2) {
    //                     index2 = i
    //                 }
    //             }


    //         self.poi1 = self.sites[index1]
    //         self.poi2 = self.sites[index2]
    //         self.poiArray.push(self.poi1)
    //         self.poiArray.push(self.poi2)

    //     }
    // }])

    .service('favService', ['$http', 'localStorageModel', function ($http, localStorageModel) {
        let serverUrl = 'http://localhost:4000/'
        self = this

        console.log("fav service init")
        let myfavs = []

        let fresh = false

        self.set = function (favlist) {
            console.log("setting favs")
            myfavs = []
            console.log(favlist)
            for (var i = 0, len = favlist.length; i < len; i += 1) {
                console.log(favlist[i])
                myfavs.push(favlist[i])
            }
            let body = {
                poi_array: myfavs
            }

            $http.post(serverUrl + "poi/saveFavorites", body)
            // .then(function (response) {

            //     console.log(response.data)


            // }, function (response) {
            //     //Second function handles error
            //    // self.login.content = "Something went wrong";
            //    console.log(response)
            // });
        };


        // self.getSize = function(){
        //     console.log(myfavs)
        //     self.size = myfavs.length
        // }



        self.reset = function () {
            fresh = false;
            myfavs = []
            //self.pois = []
            localStorageModel.removeLocalStorage("favs")
        }

        self.get = function () {
            console.log("getting favs")
            console.log("before")
            console.log(myfavs)
            var favs = localStorageModel.getLocalStorage("favs")
            if (favs) {
                myfavs = favs
                self.pois = myfavs

            }
            else {

                if (fresh === false) {
                    fresh = true;
                    $http.get(serverUrl + "poi/getFavorites")
                        .then(function (response) {
                            console.log('fgds')
                            console.log(response.data)
                            var count = 0
                            myfavs = []
                            while (count < response.data.length) {

                                console.log("adding")
                                console.log(response.data[count].id)

                                self.pois.push(response.data[count].id)
                                myfavs.push(response.data[count].id)
                                count += 1
                            }
                            //myfavs = response.data
                            localStorageModel.removeLocalStorage("favs")
                            localStorageModel.addLocalStorage("favs", myfavs)
                            console.log("got favss")
                            console.log(myfavs)


                        }, function (response) {

                            console.log("didnt get pois")
                            // return cities
                        });
                }
                else {
                    self.pois = myfavs
                }
            }
            console.log("after")
            console.log(myfavs)
        }










    }])


    .service('catService', ['$http', 'localStorageModel', function ($http, localStorageModel) {


        let serverUrl = 'http://localhost:4000/'
        self = this


        let mycats = []

        let fresh = false


        self.getCategories = function () {
            console.log('getting cats')
            let serverUrl = 'http://localhost:4000/'

            if (fresh === false) {
                fresh = true;
                $http.get(serverUrl + "users/getCategories")
                    .then(function (res) {
                        $http.get(serverUrl + "poi/getPOIs")
                            .then(function (response) {
                                console.log('fgds')
                                //self.reg.content = response.data
                                //console.log(response.data)
                                //  self.sites=response.data
                                //for (x in response.data){self.allsites.push(x)}
                                self.sites = res.data



                                mysites = res.data
                                console.log("got pois")
                                console.log(self.sites)
                                //$scope.poiCtrl.sites = response.data

                                console.log('gotten cats')
                                console.log(response)

                                random1 = Math.floor(Math.random() * 3)
                                random2 = Math.floor(Math.random() * 3)
                                while (random1 == random2) {
                                    random1 = Math.floor(Math.random() * 3)
                                }


                                self.cats.push(response.data[random1])
                                self.cats.push(response.data[random2])

                                mycats = self.cats








                                if (self.pois.length <= 0)
                                    self.favExsist = false
                                else
                                    self.favExsist = true

                                self.id1 = self.pois[length - 1]
                                self.id2 = self.pois[length - 2]

                                for (i = 0; i < self.sites.length; i++) {
                                    if (self.sites[i].id === self.id1) {
                                        self.index1 = i
                                    }
                                    if (self.sites[i].id === self.id2) {
                                        self.index2 = i
                                    }
                                }





                                self.poi1 = self.sites[self.index1]
                                self.poi2 = self.sites[self.index2]
                                self.poiArray.push(self.poi1)
                                self.poiArray.push(self.poi2)




                                self.index1 = -1
                                self.index2 = -1
                                i = 0


                                for (i = 0; i < self.sites.length; i++) {
                                    if (self.sites[i].category == self.cats[0] && self.index1 == '')
                                        self.index = i
                                    if (self.sites[i].category == self.cats[1] && self.index1 == '')
                                        self.index2 = i
                                }
                                console.log(self.index1)





                            }, function (response) {

                                console.log("didnt get cats")
                                console.log(response)
                                // return cities
                            });




                    }, function (response) {

                        console.log("didnt get cats")
                        console.log(response)
                        // return cities
                    });
            }




            else {
                self.cats = mycats
                self.sites = mysites
            }


        }


    }])

    ;
