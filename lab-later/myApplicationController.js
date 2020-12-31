var myApp = angular.module('MyApp', ['ngMaterial', 'ngMessages']);

myApp.controller('MyController', function($scope, $http, $mdDialog) {

  /**
   * showDialog function.
   * This function calls AngularJS Material's [$mdDialog's]{@link https://material.angularjs.org/1.0.7/api/service/$mdDialog}
   * show() method for the parent element.
   * @param {object} $event - [An AngularJS $event object]{@link https://code.angularjs.org/1.5.3/docs/guide/expression#-event-}.
   *                          An instance of a jQuery Event Object when jQuery is present or a similar jqLite object.
   */
  $scope.showDialog = function ($event) {
    var parentEl = angular.element(document.body);
    $mdDialog.show(
      {
        parent: parentEl,
        targetEvent: $event,
        templateUrl: '/view.html',
        locals: {},
        controller: TaskController
      }
    );
  }

  /**
   * AngularJS controller function.
   * @param {object} $scope - [AngularJS built-in $scope object]{@link https://code.angularjs.org/1.5.3/docs/guide/scope}
   *                          used to transfer data from the
   *                          controller to the view and visa-versa.
   * @param {object} $http - [AngularJS $http service]{@link https://code.angularjs.org/1.5.3/docs/api/ng/service/$http}
   *                         used to send or receive data
   *                         from remote server using browser's XMLHttpRequest (XHR)
   *                         or JSONP.
   * @param {object} $mdDialog - [AngularJS Material's $mdDialog service]{@link https://material.angularjs.org/1.0.7/api/service/$mdDialog}.
   *                             Opens a dialog over the app to inform users about
   *                             critical information or require them to make decisions.
   */
  function TaskController($scope, $http, $mdDialog) {
    cidrRegex = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))[/]([0-9]|[1-2][0-9]|3[0-2])$/;
    $scope.cidrRegex = new RegExp(cidrRegex);
    $scope.cidrStr = '';
  
    $scope.cancelDialog = function() {
      $mdDialog.cancel();
    }
  
    $scope.submit = function() {
      $mdDialog.hide();
    }
  }

});