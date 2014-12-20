angular.module('socialApp.services')
   .factory('StreamFactory', ['$http', '$q',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         var deferred = $q.defer();
         return {
            getStream: function() {
               $http({
                     method: 'GET',
                     url: location + '/app/lib/stream.php'
                  })
                  .success(function(data) {
                     deferred.resolve(data);
                  });
               return deferred.promise;
            }
         }
      }
   ]);