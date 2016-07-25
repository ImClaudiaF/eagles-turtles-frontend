app.controller('homeController', function($state, $scope){
	$scope.register = function () {
		$state.transitionTo('home.register');
	}
	$scope.login = function () {
		$state.transitionTo('home.login');
	}
})