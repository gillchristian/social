'use strict';


var app = angular.module('socialApp', ['ngRoute']);

  app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/components/home/view.html',
          controller: 'HomeController'
     })
        .when('/todo', {
          templateUrl: 'app/components/todo/view.html',
          controller: 'TodoController'
     })
        .when('/settings', {
          templateUrl: 'app/components/settings/view.html',
          controller: 'SettingsController'
     })
        .when('/new', {
          templateUrl: 'app/components/new/view.html',
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


