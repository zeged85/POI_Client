let app = angular.module('citiesApp', ["ngRoute", 'LocalStorageModule']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider)  {


    $locationProvider.hashPrefix('');


    $routeProvider.when('/', {
        template: '<h1>This is the default route</h1>'
    })
        .when('/about', {
            templateUrl: 'components/About/about.html',
            controller : 'aboutController as abtCtrl'
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
            templateUrl: 'components/favorites/favorites.template.html',
            controller : 'serviceController as srvCtrl'
        })
        .when('/login', {
            templateUrl: 'components/login/login.html',
            controller : 'serviceController as srvCtrl'
        })
        .otherwise({ redirectTo: '/' });

        
}]);










