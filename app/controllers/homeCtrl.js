'use strict';

angular.module('socialApp')
    .controller('HomeController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    
      $scope.currentUser = [];
      $scope.chus = [];

      $scope.maxlength = 140;

      var url_user = "http://localhost/social/app/components/home/user.php";
      var url_stream = "http://localhost/social/app/components/home/stream.php";
      var url_post = "http://localhost/social/app/components/home/post.php";
      
      $http.get(url_user)
               .success(function (data) {
                   $scope.currentUser = data;
                   //console.log('succes: ',$scope.currentUser);
               })
               .error(function (data) {
                   //  Do some error handling here
                   $scope.currentUser = data;
                   //console.log('error: ', $scope.currentUser);

               });

      $http.get(url_stream)
               .success(function (data) {
                   $scope.chus = data;
                   //console.log('succes: ',$scope.chus);
               })
               .error(function (data) {
                   //  Do some error handling here
                   $scope.chus = data;
                   //console.log('error: ', $scope.chus);

               });

      $scope.addMessage = function (content, user_id) {
        
        $http.get(url_post + "/?user_id= " + user_id +  "&content=" +content)
                .success(function (data) {
                  $scope.chus.unshift(data);
                  $scope.message.content = "";
                })
                .error(function (data) {
                   //  Do some error handling here
                });

      }


    }]); /* CONTROLLER FUCTION END */