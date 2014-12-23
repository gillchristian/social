angular.module('socialApp.services')
   .factory('PostFactory', ['$http', '$q',
      function($http, $q) {
         var location = window.location.protocol + "//" + window.location.host;
         return {
            PostMessage: function(obj) {
               return $http({
                     method: 'POST',
                     url: location + '/social/app/lib/post.php',
                     data: $.param({user_id: obj.userId, content: obj.message}),
                     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                  });
            }
         }
      }
   ]);