define(["mail"], function(app){

	return app.controller('SidebarController', function($scope, $stateParams){

		$scope.sidebarOptions = [
			{ label : "Inbox", type: "inbox", count : 42},
			{ label : "Starred", type: "starred", count:10},
			{ label : "Important", type: "important", count: 25},
			{ label : "Sent mail", type: "sent", count:40},
			{ label : "Drafts", type: "drafts", count:5},
		];

		if( !$scope.selectedItem )
			$scope.selectedItem = $scope.sidebarOptions[0];



		$scope.$on('change:mailType', function(event, data){
			$scope.updateSelectedEmailType( data );
		});

		$scope.updateSelectedEmailType = function(selectedType){
			$scope.sidebarOptions.forEach(function(mailType){
				if( mailType.type == selectedType )
					$scope.selectedItem = mailType;
			});
		}

	});
});