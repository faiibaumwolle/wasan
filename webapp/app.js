var mainApp = angular.module('mainApp', ['ngRoute']);
var baseView = 'webapp/view/';

mainApp.config(['$routeProvider',
  function($routeProvider) {
//    $locationProvider.html5Mode({
//    enabled: true,
//    requireBase: false
//    });
    $routeProvider
    .when('/login', {
        templateUrl: baseView + 'login.html',
        controller: 'LoginController'
    })
    .when('/showOrders', {
        templateUrl: baseView + 'register.html',
        controller: 'RegisterController'
    })
    .otherwise({
        redirectTo: '/index'
    });
  }]);