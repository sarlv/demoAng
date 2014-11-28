'use strict';

var demoAng = angular.module('demoAng', ['ngRoute']);

demoAng.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/index.html', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl' 
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl' 
        })
        .otherwise({
            redirectTo: '/index.html'
        });

}]);



