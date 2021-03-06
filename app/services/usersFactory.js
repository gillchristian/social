angular.module('socialApp.services', [])
   .factory('UsersFactory', ['$http', '$q',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         var deferred = $q.defer();
         return {
            getUserById: function() {
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