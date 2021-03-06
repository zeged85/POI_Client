let app = angular.module('citiesApp', ["ngRoute", 'LocalStorageModule']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider)  {


    $locationProvider.hashPrefix('');


    $routeProvider
    .when('/', {
        templateUrl: 'components/Login/login.html',
        controller : 'loginController as loginController'
    })
        .when('/about', {
            templateUrl: 'components/About/about.html',
            controller : 'aboutController as aboutController'
        })
        .when('/poi', {
            templateUrl: 'components/POI/poi.html',
            controller : 'poiCtrl as poiCtrl'
        })
        .when('/service', {
            templateUrl: 'components/Services/service.html',
            controller : 'serviceController as srvCtrl'
        })
        .when('/favorites', {
            templateUrl: 'components/favorites/favorites.html',
            controller : 'favoritesController as favCtrl'
        })
        .when('/home', {
            templateUrl: 'components/home/home.html',
            controller : 'homeController as homCtrl'
        })
        .when('/reg', {
            templateUrl: 'components/register/register.html',
            controller : 'registerController as registerController'
        })
        .when('/poiPage', {
            templateUrl: 'components/poiPage/poiPage.html',
            controller : 'poiPageController as poiPageController'
        })
        .otherwise({ redirectTo: '/' });

        
}]);










