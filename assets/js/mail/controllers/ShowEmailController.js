define(["mail"], function(app){
	return app.controller("ShowEmailController", function($scope, $stateParams){
		$scope.message = 'Hello world';
	});
});