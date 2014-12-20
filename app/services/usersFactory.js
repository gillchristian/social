angular.module('socialApp.services', [])
   .factory('UsersFactory', ['$http',
      function($http) {
         var location = window.location.protocol + "//" + window.location.host;
         return {
            getUserById: function() {
               return $http({
                  method: 'GET',
                  url: location + '/app/lib/user.php'
               });

            }
         }
      }
   ]);