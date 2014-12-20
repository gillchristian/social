angular.module('socialApp.services')
   .factory('PostFactory', ['$http', '$q',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         var deferred = $q.defer();
         return {
            PostMessagge: function() {
               $http({
                     method: 'GET',
                     url: location + '/app/lib/post.php'
                  })
                  .success(function(data) {
                     deferred.resolve(data);
                  });
               return deferred.promise;
            }
         }
      }
   ]);