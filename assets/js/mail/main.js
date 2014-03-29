require.config({
	baseUrl : '/js/mail',
	shim: {
		angular: {
			exports : 'angular'
		},
		uiRouter: ['angular']	
	},
	paths:{
		angular : 'libs/angular',
		text : 'libs/text',
		uiRouter: 'libs/angular-ui-router.min'
	}
	
});

require([
		  'angular',
		  'mail',
		  'routes'
		  ], function(angular, app){
	//Bootstrap your application here.
	angular.element(document).ready(function(){
		angular.bootstrap(document, ["mailApp"]);
	});
});