'use strict';

angular.module('mcHacksApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trends', {
        templateUrl: 'views/trends.html',
        controller: 'TrendsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
