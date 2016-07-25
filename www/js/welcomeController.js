app.controller('welcomeController', function($sce, $scope, $state){
	$scope.welcome = function() {
		$scope.source = $sce.trustAsResourceUrl("../Eat.jpg");
		setTimeout(function(){ 
			$state.transitionTo('home'); 
		}, 3000);
	}
});