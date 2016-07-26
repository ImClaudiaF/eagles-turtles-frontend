app.controller('homeController', function($state, $scope, $sce){
	$scope.init = function () {
		$scope.source = $sce.trustAsResourceUrl("../Eat2.jpeg");
	}
	$scope.register = function () {
		$state.transitionTo('header.register');
	}
	$scope.login = function () {
		$state.transitionTo('header.login');
	}
})