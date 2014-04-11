define([
		"mail",
		"text!partials/actions.html",
		"text!partials/sidebar.html",
		"text!partials/content.html",
		"text!partials/show.html",
		"text!partials/compose.html",
		"controllers/EmailController",
		"controllers/SidebarController",
		"controllers/ShowEmailController",
		"controllers/ComposeController"
		
		], function(app, actionsTemplate, sidebarTemplate, contentTemplate, showMailTemplate, composeTemplate ){

	return app.config(function($stateProvider, $urlRouterProvider){
	
		$urlRouterProvider.when('/mail', '/mail/inbox');

		$urlRouterProvider.otherwise("/mail/inbox");



		$stateProvider
			.state('mail', {
				url : '/mail',
				views: {
					'actions' : {
						template :  actionsTemplate
					},
					'sidebar':{
						template: sidebarTemplate,
						controller: 'SidebarController'
					} 
				}
			})
			.state('mail.type', {
				url : '/:type',
				views: {
					'content@mail':{
						template: contentTemplate,
						controller:'EmailController'		
					}
				}
				
			})
			.state('mail.type.compose', {
				url : '^/mail/:type/compose',
				views: {
					'compose@mail.type':{
						template: composeTemplate,
						controller : 'ComposeController'
					}
				}

			})
			.state('mail.type.show', {
				url: "/:id",
				views: {
					'show@mail.type': {
						template: showMailTemplate,
						controller: 'ShowEmailController'
					}
				}
			});
	});
});