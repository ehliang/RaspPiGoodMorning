angular.module('pi',[])
    .controller('piController', ["$scope", "$interval", function($scope, $interval) {
     $scope.morning = true;
        $scope.weather = true; 
    
}])
.directive('MyCurrentTime', ['$interval', 'dateFilter', 
                            function($interval,dateFilter)])