define([
		"mail",
		"text!partials/actions.html",
		"text!partials/sidebar.html",
		"text!partials/content.html",
		"text!partials/show.html",
		"text!partials/gmail_compose.html",
		"controllers/EmailController",
		"controllers/SidebarController",
		"controllers/ShowEmailController"
		
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
						template: composeTemplate
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