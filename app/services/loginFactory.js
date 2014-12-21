angular.module('socialApp.services')
   .factory('LoginFactory', ['$http', '$q',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         var deferred = $q.defer();
         return {
            login: function(obj) {
               $http({
                     method: 'POST',
                     url: location + '/social/app/lib/login/login.php',
                     data: $.param({username: obj.username, password: obj.password}),
                     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                  })
                  .success(function(user) {
                     console.log('user: ', user);
                     deferred.resolve(user);
                  });
               return deferred.promise;
            },
            isLogged: function() {
               $http({
                     method: 'GET',
                     url: location + '/social/app/lib/login/isLogged.php'
                  })
                  .success(function(user) {
                     deferred.resolve(user);
                  });
               return deferred.promise;
            },
            logout: function(){
               $http({
                     method: 'POST',
                     url: location + '/social/app/lib/login/logout.php'
                  })
            }

         }
      }
   ]);