define(["mail"], function(app){
	return app.controller('ComposeController', function($scope){
		$scope.createNew = true;
		$scope.$emit("toggle:content");
		console.log('instantiated compose controller');

		$scope.$on("$stateChangeStart", function(event, toState){
			console.log('stae change start in compose controller');
			console.log(toState);
			if( toState.name == "mail.type.compose") {
				$scope.$emit("toggle:content");
			}
		});

	});
});