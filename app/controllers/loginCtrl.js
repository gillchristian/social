angular.module('socialApp.controllers')
    .controller('LoginController', ['$scope', 'LoginFactory', '$state',
    	function ($scope, LoginFactory, $state) {
    	
    	$scope.user = {
    		username: '',
    		password: ''
    	};

    	$scope.login = function(){
    		LoginFactory.login($scope.user)
    		.success(function(data){
    			console.log('Data Login: ', data);
    			if(typeof data === 'object'){
    				// $location.path('/');
    				// $location.url('/');
    				$state.go('app');
    			} else {
    				$scope.errorMessage = 'Pone bien los datos logi';
    			}
    		});
    	};

    }]); /* CONTROLLER FUCTION END */