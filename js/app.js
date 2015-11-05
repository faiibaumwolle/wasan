var mainApp = angular.module('mainApp', ['ngRoute']);
  
mainApp .config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'LoginController'
    })
    .when('/showOrders', {
        templateUrl: 'view/register.html',
        controller: 'RegisterController'
    })
    .otherwise({
        redirectTo: '/index'
    });
  }]);