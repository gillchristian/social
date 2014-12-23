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
                  });
            },
            getStream: function(){
               StreamFactory.getStream()
                  .then(function(stream){
                     $scope.chus = stream;
                  });
            },
            getStreamNoPromise: function(){
               StreamFactory.getStreamNoPromise()
                  .success(function(stream){
                     $scope.chus = stream;
                  });
            },
            PostMessage: function(obj){
               PostFactory.PostMessage(obj)
               .success(function(data){
                  $scope.chus.unshift(data);
                  $scope.message.content = "";
                  console.log(data);
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
            $scope.services.PostMessage(obj);
         }

         $scope.logout = function(){
            $scope.services.logout();
         }

         $scope.getProfilePicture = function(user_id){
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
                  return 'Christian Gill';
                  break;
               case '2': 
                  return 'Rocio Jalifi';
                  break;
            }
         };

         $scope.getUsername = function(user_id){
            switch(user_id){
               case '1':
                  return 'novio';
                  break;
               case '2': 
                  return 'novia';
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