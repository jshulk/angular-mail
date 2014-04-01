define(["mail"], function(app){
	return app.controller("ShowEmailController", function($scope, $stateParams){
		$scope.message = $stateParams.id;
		if( $stateParams.id )
			$scope.$parent.hideTabs = true;
		console.log('called show email controller');

	});
});