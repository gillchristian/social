angular.module('socialApp.controllers')
   .controller('LoginController', ['$scope', '$http', 'LoginFactory',
      function($scope, $http, LoginFactory) {

         $scope.services = {
            logout: function(){
               LoginFactory.logout()
               .then(function (){
                  console.log('logout clicked');
               })
            }
         };


         $scope.logout = function(){
            $scope.services.logout();
         }
      }
   ]); 