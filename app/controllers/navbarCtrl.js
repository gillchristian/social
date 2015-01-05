angular.module('socialApp.controllers')
   .controller('NavbarController', ['$scope', 'LoginFactory', '$state',
      function($scope, LoginFactory, $state) {

         $scope.services = {
            logout: function() {
               LoginFactory.logout();
               $state.go('login');
            }
         };

         $scope.logout = function() {
            $scope.services.logout();
         }
         
         $scope.isActive = function (state) {
            return $state.includes(state);
         }

      }
   ]);