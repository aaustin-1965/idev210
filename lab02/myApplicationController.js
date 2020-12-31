/**
 * Define AngularJS application MyApp using the angular.module method.
 * Import ngMessages and ngMaterial modules into the application
 *   by specifying them as an array of strings for the angular.module
 *   method's second argument so that we may access these modules' features.
 */
var myApp = angular.module('MyApp', ['ngMessages', 'ngMaterial']);

/**
 * Define MyApp's controller MyController.
 * MyController sets the $scope object's cidrRegex property.
 */
myApp.controller('MyController', function($scope) {
  // cidrRegex is a regular expression to match IPv4 CIDR addresses.
  // It will be used to validate user data.
  // We define it here and make it available to our AngularJS
  // application by assigning it to the $scope object's cidrRegex
  // property.
  cidrRegex = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))[/]([0-9]|[1-2][0-9]|3[0-2])$/;
  $scope.cidrRegex = new RegExp(cidrRegex);
});