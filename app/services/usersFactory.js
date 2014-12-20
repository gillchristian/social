angular.module('socialApp.services', [])
   .factory('UsersFactory', ['$http', '$q',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         var deferred = $q.defer();
         return {
            getUserById: function() {
               $http({
                     method: 'GET',
                     url: location + '/app/lib/user.php'
                  })
                  .success(function(user) {
                  	console.log('data ', user);
                     deferred.resolve(user);
                  });
               return deferred.promise;
            }
         }
      }
   ]);