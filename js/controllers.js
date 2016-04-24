'use strict';

angular.module('twitterapp.controllers', [])

.controller('MainCtlr', function($rootScope, $state){
	console.log("Main controllers is being read");
    $rootScope.name = "Joshua Galindo";
    
})

.controller('TestCtlr', function($rootScope, $scope, GeoLocation){
	console.log("Test Controller is being read");

	$scope.search = function(searchQuery){
		var zipCode = searchQuery.postalCode;
		GeoLocation.location(searchQuery).success(function(data){
			console.log(data);
			var woeID = data['places']['place'][0]['woeid'];
			GeoLocation.cityName(zipCode).success(function(data){
				console.log("City Info");
				console.log(data);
			}).error(function(data){
				console.log("City name failed");
			})
		}).error(function(data){
			Console.log("Error with location");
		})
		

		//console.log($scope.data);

	}

	





});