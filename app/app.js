'use strict';


var app = angular.module('socialApp', ['ngRoute']);

  app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/templates/home.html',
          controller: 'HomeController'
     })
        .when('/todo', {
          templateUrl: 'app/templates/todo.html',
          controller: 'TodoController'
     })
        .when('/settings', {
          templateUrl: 'app/templates/settings.html',
          controller: 'SettingsController'
     })
        .when('/new', {
          templateUrl: 'app/templates/new.html',
          controller: 'NewController'
     })
    .otherwise({redirectTo: '/'
       });
   });
        
    
  app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);


