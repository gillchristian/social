angular.module('socialApp.services')
   .factory('StreamFactory', ['$http',
      function($http) {
         var location = window.location.protocol + "//" + window.location.host;
         return {
            getStream: function() {
               return $http({
                  method: 'GET',
                  url: location + '/app/lib/stream.php'
               });

            }
         }
      }
   ]);