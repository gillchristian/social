angular.module('socialApp', ['ui.router', 'socialApp.controllers', 'socialApp.services'])

.config(function($stateProvider, $urlRouterProvider) {
   //
   // For any unmatched url, redirect to /state1
   $urlRouterProvider.otherwise("/");
   //
   // Now set up the states
   $stateProvider
      .state('app', {
         url: '/',
         views: {
                "navbar": {
                    templateUrl: "app/templates/navbar.html"
                },
                "content": {
                    templateUrl: "app/templates/home.html",
                     controller: 'HomeController'
                }
            }
      })
      .state('todo', {
         url: "/todo",
         views: {
                "navbar": {
                    templateUrl: "app/templates/navbar.html"
                },
                "content": {
                    templateUrl: "app/templates/todo.html",
                     controller: 'TodoController'
                }
            }
      })
      .state('settings', {
         url: '/settings',
         views: {
                "navbar": {
                    templateUrl: "app/templates/navbar.html"
                },
                "content": {
                    templateUrl: "app/templates/settings.html",
                     controller: 'SettingsController'
                }
            }
      })
      .state('new', {
         url: "/new",
         views: {
                "navbar": {
                    templateUrl: "app/templates/navbar.html"
                },
                "content": {
                    templateUrl: "app/templates/new.html",
                     controller: 'NewController'
                }
            }
      })
      .state('login', {
         url: "/login",
         views: {
                "content": {
                    templateUrl: "app/templates/login.html",
                     controller: 'LoginController'
                }
            }
      });
})

// .config(function($routeProvider) {
//    $routeProvider
//       .when('/', {
//          templateUrl: 'app/templates/home.html',
//          controller: 'HomeCtrl'
//       })
//       .when('/todo', {
//          templateUrl: 'app/templates/todo.html',
//          controller: 'TodoController'
//       })
//       .when('/settings', {
//          templateUrl: 'app/templates/settings.html',
//          controller: 'SettingsController'
//       })
//       .when('/new', {
//          templateUrl: 'app/templates/new.html',
//          controller: 'NewController'
//       })
//       .when('/login', {
//          templateUrl: 'app/templates/login.html',
//          controller: 'LoginController'
//       })
//       .otherwise({
//          redirectTo: '/'
//       });
// })

.config(['$httpProvider', function($httpProvider) {
   $httpProvider.defaults.useXDomain = true;
   delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

.run(function($rootScope, $state, LoginFactory) {
   $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (toState.name !== 'login') {
         LoginFactory.isLogged()
            .success(function(user) {
               if (user === '') {
                  $state.go('login');
               }
            });
      }

   });
});