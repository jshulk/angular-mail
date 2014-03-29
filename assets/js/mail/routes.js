define([
		"mail",
		"text!partials/main.html",
		"controllers/EmailController"
		], function(app, mainTemplate){

	return app.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise("/inbox");

		$stateProvider
			.state('inbox', {
				url: '/inbox',
				template: mainTemplate,
				controller: 'emailController'
			});
	});
});