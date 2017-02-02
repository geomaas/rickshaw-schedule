let mod = angular.module('ScheduleControllers');

mod.controller('AvailableController', ['$scope', '$location', '$http', 'ScheduleService', function($scope, $location, $http, ScheduleService) {
    $scope.riderName = '';
    $scope.companyName = '';
    $scope.rickshawRiders = ScheduleService.getRickshawRiders();
    console.log($scope.rickshawRiders, "testing receiving rickshaw rider info");
    $scope.pedicabRiders = ScheduleService.getPedicabRiders();
    console.log($scope.pedicabRiders, 'testing pedicab info');

    $scope.submitRiderSchedule = function() {
        let riderObj = {
                riderName: $scope.riderName,
                companyName: $scope.companyName,
                avg: 0,
                schedule: {
                    monday: {
                        oneshift: $scope.monShift1,
                        twoshift: $scope.monShift2,
                        threeshift: $scope.monShift3,
                    },
                    tuesday: {
                        oneshift: $scope.tueshift1,
                        twoshift: $scope.tueshift2,
                        threeshift: $scope.tueshift3,
                    },
                    wednesday: {
                        oneshift: $scope.wedShift1,
                        twoshift: $scope.wedShift2,
                        threeshift: $scope.wedShift3,
                    },
                    thursday: {
                        oneshift: $scope.thursShift1,
                        twoshift: $scope.thursShift2,
                        threeshift: $scope.thursShift3,
                    },
                    friday: {
                        oneshift: $scope.friShift1,
                        twoshift: $scope.friShift2,
                        threeshift: $scope.friShift3,
                    },
                    saturday: {
                        oneshift: $scope.satShift1,
                        twoshift: $scope.satShift2,
                    },
                    sunday: {
                        oneshift: $scope.sunShift1,
                        twoshift: $scope.sunShift2,
                    },
                },
            }
            //////////////// post request ////////////
        $http({
            url: 'http://tiny-tiny.herokuapp.com/collections/rickshaw',
            method: 'post',
            data: JSON.stringify(riderObj)
        }).then(function(data) {
            console.table(data);
        }).catch(function() {
            console.error('availability error!!!');
        });
    };
    /////////////delete request/////////////
    $scope.deleteRider = function(id) {
        console.log('test click', id);

        $http({
            url: 'http://tiny-tiny.herokuapp.com/collections/rickshaw' + '/' + id,
            method: 'delete',
        }).then(function(data) {
          console.log(data);
        }).catch(function(){
          console.error('delete error');
        });
    };
}]);
