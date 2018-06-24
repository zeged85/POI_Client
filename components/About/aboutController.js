angular.module('citiesApp')
.controller('aboutController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.guest = 'guest';
    $scope.myFunc = function() {
      $scope.count++;
    };
  }]);