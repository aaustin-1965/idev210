/**
 * Define AngularJS application MyApp with method angular.module().
 * Our application uses features from AngularJS's ngMessages and ngMaterial modules.
 *   Import these modules into the application by specifying
 *   them as an array of strings for angular.module()'s second argument.
 * This application assigns a function to the $scope object's
 *   showDialog property. We will associate this function to an HTML button.
 *   When a user clicks the button, it will render an AngularJS Material
 *   dialog modal.
 */
var myApp = angular.module('MyApp', ['ngMaterial', 'ngMessages']);

/**
 * Define MyApp's controller MyController.
 * MyController sets the $scope object's showDialog property
 *   to a function that displays an AngularJS Material dialog modal.
 * The function takes three parameters.
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
myApp.controller('MyController', function($scope, $http, $mdDialog) {

  /**
   * showDialog function.
   * This function calls AngularJS Material's
   *   [$mdDialog's]{@link https://material.angularjs.org/1.0.7/api/service/$mdDialog}
   *   show() method for the parent element.
   * @param {object} $event - [An AngularJS $event object]{@link https://code.angularjs.org/1.5.3/docs/guide/expression#-event-}.
   *                          An instance of a jQuery Event Object when jQuery is present or a similar jqLite object.
   */
  $scope.showDialog = function ($event) {
    var parentEl = angular.element(document.body);
    // Call method $mdDialog.show passing an object argument
    // describing the dialog to render. Leave templateUrl set to an
    // empty string for now. We will replace it soon.
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
   * @function TaskController
   * @description An AngularJS Material $mdDialog controller function.
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

    // cidrRegex is a regular expression to match IPv4 CIDR addresses.
    // It will be used to validate user data.
    // We define it here and make it available to our AngularJS
    // application by assigning it to the $scope object's cidrRegex
    // property.
    cidrRegex = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))[/]([0-9]|[1-2][0-9]|3[0-2])$/;
    $scope.cidrRegex = new RegExp(cidrRegex);

    // Set the form control associated with variable cidrStr to an empty string.
    // We don't need this now, but later we will create an optional manual task parameter
    // that will initialize the relevant form control.
    $scope.cidrStr = '';

    /**
     * Set $scope's cancelDialog property to a function that calls $mdDialog's
     * .cancel() method. We will associate this method to a button users can
     * press if they wish to cancel working the manual task.
     */
    $scope.cancelDialog = function() {
      $mdDialog.cancel();
    }

    /**
     * Set $scope's submit property to a function that calls $mdDialog's
     * .hide() method. We will associate this method to a button users can
     * press when they wish to complete working the manual task.
     */
    $scope.submit = function() {
      $mdDialog.hide();
    }
  }

});