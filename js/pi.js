angular.module('pi',[])
    .controller('piController', ["$scope", "$http", "$interval", function($scope, $http, $interval) {
     $scope.morning = true;
    $scope.weather = true; 
        
        $scope.method='GET';
        $scope.url='http://api.wunderground.com/api/d3d8aed6895cf4a5/geolookup/conditions/forecast/q/Canada/Richmond_Hill.json';
        $scope.abc ="rere";
        $scope.fetch = function (){
            $scope.code = null;
            $scope.response = null; 
            
            $http({method: 'GET', url: 'http://api.wunderground.com/api/d3d8aed6895cf4a5/geolookup/conditions/forecast/q/Canada/Richmond_Hill.json'}).success(function(data)
            {
                $scope.gets = data; 
            }
        });
                               
                                
}])
    
    
    
//.directive('MyCurrentTime', ['$interval', 'dateFilter', 
//                            function($interval,dateFilter)])