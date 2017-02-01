let mod = angular.module('ScheduleControllers');

mod.controller('ScheduleViewController', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {
    $scope.rickshawRiders = ScheduleService.getRickshawRiders();
    console.log($scope.rickshawRiders,"testing receiving rickshaw rider info");
    $scope.pedicabRiders = ScheduleService.getPedicabRiders();
    console.log($scope.pedicabRiders, 'testing pedicab info');


}]);
