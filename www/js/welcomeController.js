app.controller('welcomeController', function($sce, $scope, $state){
	$scope.welcome = function() {
		$scope.source = $sce.trustAsResourceUrl("../Eat3.jpg");
		setTimeout(function(){ 
			$state.transitionTo('header.home'); 
		}, 500);
	}
});