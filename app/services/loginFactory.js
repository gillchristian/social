angular.module('socialApp.services')
   .factory('LoginFactory', ['$http',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         return {
            login: function(obj) {
               return $http({
                     method: 'POST',
                     url: location + '/social/app/lib/login/login.php',
                     data: $.param({username: obj.username, password: obj.password}),
                     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                  });
            },
            isLogged: function() {
               return $http({
                     method: 'GET',
                     url: location + '/social/app/lib/login/isLogged.php'
                  });
            },
            logout: function(){
               return $http({
                     method: 'POST',
                     url: location + '/social/app/lib/login/logout.php'
                  });
            }

         }
      }
   ]);