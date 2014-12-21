angular.module('socialApp.controllers')
    .controller('LoginController', ['$scope', 'LoginFactory', '$location',
    	function ($scope, LoginFactory, $location) {
    	
    	$scope.user = {
    		username: '',
    		password: ''
    	};

    	$scope.login = function(){
    		LoginFactory.login($scope.user)
    		.then(function(data){
    			console.log('data: ', data);
    			if(data !== ''){
    				$location.path('/');
    			} else {
    				$scope.errorMessage = 'Pone bien los datos logi';
    			}
    		});
    	};

    }]); /* CONTROLLER FUCTION END */