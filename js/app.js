'use strict';
angular.module('twitterapp', ['ngRoute', 'ui.router', 'twitterapp.controllers', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($routeProvider, $stateProvider, $urlRouterProvider) {
	console.log("App.js is being read");

	$routeProvider
	  .when('/', {
	    templateUrl: 'templates/main.html',
	    controller: 'MainCtlr'
	  })
	  .when('/test', {
	  	templateUrl:'templates/test.html',
	  	controller: 'TestCtlr'
	  });
	  
	  
})