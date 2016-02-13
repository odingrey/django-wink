var winkApp = angular.module('wink', [
	'ngRoute',
	'winkControllers',
	'ngMaterial',
	'ngMessages',
	'material.svgAssetsCache'
]);


winkApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: '/static/wink/templates/main.html',
				controller: 'mainController'
			}).
                        when('/login', {
                                templateUrl: '/static/wink/templates/main.html',
                                controller: 'loginController'
                        }).
                        when('/register', {
                                templateUrl: '/static/wink/templates/main.html',
                                controller: 'registerController'
                        }).
                        when('/registerAPI', {
                                templateUrl: '/static/wink/templates/main.html',
                                controller: 'registerAPIController'
                        }).
                        when('/changeAPI', {
                                templateUrl: '/static/wink/templates/main.html',
                                controller: 'changeAPIController'
                        }).
                        when('/settings', {
                                templateUrl: '/static/wink/templates/settings.html',
                                controller: 'settingsController'
                        }).
			otherwise({
				redirectTo: '/'
			});
	}]
);
