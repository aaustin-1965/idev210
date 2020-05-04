var myApp = angular.module('MyApp', ['ngMessages', 'ngMaterial']);

myApp.controller('MyController', function($scope) {

  cidrRegex = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))[/]([0-9]|[1-2][0-9]|3[0-2])$/;
  $scope.cidrRegex = new RegExp(cidrRegex);
});