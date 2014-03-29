define(["mail"], function(app){
	return app.controller('emailController', function($scope){
		$scope.message = 'hello world';
	});
});