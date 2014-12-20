angular.module('socialApp.services', [])
   .factory('LoginFactory', ['$http', '$q',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         var deferred = $q.defer();
         return {
            login: function(obj) {
               $http({
                     method: 'POST',
                     url: location + '/social/app/lib/user.php',
                     data: $.param({username: obj.username, password: obj.password}),
                     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                  })
                  .success(function(user) {
                     deferred.resolve(user);
                  });
               return deferred.promise;
            },
            isLoged: function() {
               $http({
                     method: 'GET',
                     url: location + '/social/app/lib/user.php'
                  })
                  .success(function(user) {
                     deferred.resolve(user);
                  });
               return deferred.promise;
            }

         }
      }
   ]);