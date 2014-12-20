angular.module('socialApp', ['ngRoute', 'socialApp.controllers', 'socialApp.services'])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/templates/home.html',
      controller: 'HomeCtrl'
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
    .otherwise({
      redirectTo: '/'
    });
})


.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);