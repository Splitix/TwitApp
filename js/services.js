angular.module('twitterapp.services', [])

.service('GeoLocation', function($http){

	var appID = "dj0yJmk9a2NNT0t0RXJGSTJJJmQ9WVdrOWRXRjZOVzR5Tm1zbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wOQ--"
	return{
		location: function(searchQuery){
			var zipCode = searchQuery.postalCode;
			return $http.get('http://where.yahooapis.com/v1/places.q(' + zipCode + ')?appid=' + appID);
		},

		cityName: function(zipCode){
			 
			 return $http.get('http://api.zippopotam.us/us/' + zipCode);
			//return $http.get('http://where.yahooapis.com/v1/place/' + woeID + '/parent?select=long&appid=' + appID);
		}
		
	}
})


