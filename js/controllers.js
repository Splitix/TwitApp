'use strict';

angular.module('twitterapp.controllers', [])

.controller('MainCtlr', function($rootScope, $state){
	console.log("Main controllers is being read");
    $rootScope.name = "Joshua Galindo";
    
})

.controller('TestCtlr', function($rootScope, $scope, GeoLocation){
	console.log("Test Controller is being read");
	var woeID;
	var city;
	$scope.search = function(searchQuery){
		var zipCode = searchQuery.postalCode;
		GeoLocation.location(searchQuery).success(function(data){
			console.log(data);
			woeID = data['places']['place'][0]['woeid'];
			GeoLocation.cityName(zipCode).success(function(data){
				city = data['places'][0]['place name'];
				console.log(city);
			}).error(function(data){
				console.log("City name failed");
			})
		}).error(function(data){
			Console.log("Error with location");
		})
		

		//console.log($scope.data);

	}

	





});