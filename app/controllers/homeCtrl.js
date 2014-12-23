angular.module('socialApp.controllers', [])
   .controller('HomeController', ['$scope', '$http', 'UsersFactory', 'StreamFactory', 'PostFactory', 'LoginFactory',
      function($scope, $http, UsersFactory, StreamFactory, PostFactory, LoginFactory) {

         var location = window.location.protocol + "//" + window.location.host;
         //Services handler
         $scope.services = {
            getUser: function() {
               LoginFactory.isLogged()
                  .success(function(user) {
                     $scope.currentUser = user;
                     console.log('user', user);
                  });
            },
            getStream: function(){
               StreamFactory.getStream()
                  .then(function(stream){
                     $scope.chus = stream;
                     console.log(stream);
                  });
            },
            postMessage: function(obj){
               PostFactory.PostMessagge(obj)
               .then(function(data){
                  console.log(data);
                  $scope.chus.unshift(data);
                  $scope.message.content = "";
               })
            },
            logout: function(){
               LoginFactory.logout()
               .success(function (data){
                  console.log('logout clicked');
                  $state.go('login');
               });
            }
         };


         // Execute services to get data
         $scope.services.getUser();
         $scope.services.getStream();

         $scope.addMessage = function(obj){
            $scope.services.postMessage(obj);
         }

         $scope.logout = function(){
            $scope.services.logout();
         }

         $scope.getProfilePicture = function(user_id){
            console.log(' picture:', user_id);
            switch(user_id){
               case '1':
                  return 'novio';
                  break;
               case '2': 
                  return 'novia';
                  break;
            }
         };

         $scope.getProfileName = function(user_id){
            switch(user_id){
               case '1':
                  return 'Gill pito duro';
                  break;
               case '2': 
                  return 'Rocio Jalifi';
                  break;
            }
         };

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