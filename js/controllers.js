'use strict';

angular.module('twitterapp.controllers', [])

.controller('MainCtlr', function($rootScope, $state){
	console.log("Main controllers is being read");
    $rootScope.name = "Joshua Galindo";
    
})

.controller('TestCtlr', function($rootScope, $scope){
	console.log("Test Controller is being read");
	

	$scope.title1 = 'Button';
	$scope.title4 = 'Warn';
	$scope.isDisabled = true;

	$scope.googleUrl = 'http://google.com';





});