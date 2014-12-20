angular.module('socialApp.controllers', [])
   .controller('HomeCtrl', ['$scope', '$http', 'UsersFactory', 'StreamFactory',
      function($scope, $http, UsersFactory, StreamFactory) {

         //Services handler
         $scope.services = {
            getUserById: function() {
               UsersFactory.getUserById()
                  .success(function(user) {
                     $scope.currentUser = user;
                  })
                  .error(function(error) {
                     console.log(error);
                  });
            },
            getStream: function(){
               StreamFactory.getStream()
                  .success(function(stream){
                     $scope.chus = stream;
                  })
                  .error(function(error){
                     console.log(error);
                  })
            }
         };

         // Execute services to get data
         $scope.services.getUserById();
         $scope.services.getStream();



         $scope.chus = [];

         $scope.maxlength = 140;

         var url_stream = "http://localhost/social/app/components/home/stream.php";
         var url_post = "http://localhost/social/app/components/home/post.php";


         $scope.addMessage = function(content, user_id) {

            $http.get(url_post + "/?user_id= " + user_id + "&content=" + content)
               .success(function(data) {
                  $scope.chus.unshift(data);
                  $scope.message.content = "";
               })
               .error(function(data) {
                  //  Do some error handling here
               });

         }


      }
   ]); /* CONTROLLER FUCTION END */