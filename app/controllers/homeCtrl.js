angular.module('socialApp.controllers', [])
   .controller('HomeCtrl', ['$scope', '$http', 'UsersFactory', 'StreamFactory', 'PostFactory',
      function($scope, $http, UsersFactory, StreamFactory, PostFactory) {

         var location = window.location.protocol + "//" + window.location.host;
         //Services handler
         $scope.services = {
            getUserById: function() {
               UsersFactory.getUserById()
                  .then(function(user) {
                     $scope.currentUser = user;
                  });
            },
            getStream: function(){
               StreamFactory.getStream()
                  .then(function(stream){
                     $scope.chus = stream;
                  });
            },
            postMessage: function(obj){
               PostFactory.PostMessagge(obj)
               .then(function(data){
                  console.log(data);
                  $scope.chus.unshift(data);
                  $scope.message.content = "";
               })
            }
         };


         // Execute services to get data
         $scope.services.getUserById();
         $scope.services.getStream();

         $scope.addMessage = function(obj){
            $scope.services.postMessage(obj);
         }



         $scope.chus = [];

         $scope.maxlength = 140;

         // $scope.addMessage = function(content, user_id) {

         //    $http.get(location + '/social/app/lib/post.php' + "/?user_id= " + user_id + "&content=" + content)
         //       .success(function(data) {
         //          $scope.chus.unshift(data);
         //          $scope.message.content = "";
         //       })
         //       .error(function(data) {
         //          //  Do some error handling here
         //       });

         // }


      }
   ]); /* CONTROLLER FUCTION END */