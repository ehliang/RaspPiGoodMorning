angular.module('weather',[])
    .controller('weatherController', ["$scope", "$http", function($scope, $http) {
        $scope.morning = true;
        $scope.weather = true; 
        $scope.weatherIntro = "THE WEATHER IS";
        $scope.weatherData = {}; 

        $scope.url ='http://api.wunderground.com/api/d3d8aed6895cf4a5/geolookup/conditions/forecast/q/Canada/Richmond_Hill.json';
        
        $scope.weatherData.fetch = function (item, event){
            
            var responsePromise = $http.get($scope.url);
            
            responsePromise.success(function(data, status, headers, config){
                $scope.weatherData.currentTemperature = data.current_observation.feelslike_c + "ºC"; 
                $scope.weatherData.currentTime = data.current_observation.observation_time; 
            });
            
            responsePromise.error(function(data, status, headers, config){
                $scope.weatherIntro = "FAILED TO GET WEATHER";
            })

        $scope.morning = false;
        }
           
                                
}])
