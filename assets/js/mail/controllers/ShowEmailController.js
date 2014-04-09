define(["mail"], function(app){
	return app.controller("ShowEmailController", function($scope, $stateParams){
		$scope.message = $stateParams.id;
		if( $stateParams.id )
			$scope.$parent.hideTabs = true;
		console.log('called show email controller');

		$scope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
			// console.log('toState show email' );
			// console.dir(toState);
			// console.log('fired state change start on show email controller');
		});

	});
});