define(["mail"], function(app){
	return app.controller('EmailController', function($scope, $stateParams, $state){
		
		$scope.emails = [
			{ id : 1, subject : "Dummy Email", title : "This is a big title", content: "Hello, How are you ?", starred:true, type : 'inbox' },
			{ id:2, subject : "Dummy Email 2", title : "This is a big title2", content: "Hello, How are you ?", type : 'inbox' },
			{ id: 3,  subject : "Dummy Email 3", title : "This is a big title3", content: "Hello, How are you ?", type : 'inbox' },
			{ id : 4, subject : "Dummy Email 4", title : "This is a big title4", content: "Hello, How are you ?", type : 'inbox' },
			{ id : 5, subject : "Dummy Email 5", title : "This is a big title5", content: "Hello, How are you ?", type : 'inbox' }

		];

		$scope.hideTabs = false;

		$scope.$on("toggle:content", function(event, data){
			console.log('captured toggle content event');
			$scope.hideTabs = false;
		});

		$scope.$emit('change:mailType', $stateParams.type );

		$scope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
			if( toState.name == "mail.type" ){
				console.log('state changed to mail.type');
				$scope.hideTabs = false;
			}
		});
		

		

	});
});