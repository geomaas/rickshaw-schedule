(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let mod = angular.module('ScheduleControllers');

mod.controller('AvailableController', ['$scope', '$location', '$http', 'ScheduleService', function($scope, $location, $http, ScheduleService) {
    $scope.riderName = '';
    $scope.companyName = '';
    $scope.rickshawRiders = ScheduleService.getRickshawRiders();
    console.log($scope.rickshawRiders,"testing receiving rickshaw rider info");
    $scope.pedicabRiders = ScheduleService.getPedicabRiders();
    console.log($scope.pedicabRiders, 'testing pedicab info');

    $scope.submitRiderSchedule = function() {
        var riderObj = {
            riderName: $scope.riderName,
            companyName: $scope.companyName,
            avg: 0,
            schedule: {
              monday:{oneshift:$scope.monShift1, twoshift: $scope.monShift2, threeshift: $scope.monShift3,},
              tuesday:{oneshift:$scope.tueshift1, twoshift: $scope.tueshift2, threeshift: $scope.tueshift3,},
              wednesday:{oneshift:$scope.wedShift1, twoshift: $scope.wedShift2, threeshift: $scope.wedShift3,},
              thursday:{oneshift:$scope.thursShift1, twoshift: $scope.thursShift2, threeshift: $scope.thursShift3,},
              friday:{oneshift:$scope.friShift1, twoshift: $scope.friShift2, threeshift: $scope.friShift3,},
              saturday:{oneshift:$scope.satShift1, twoshift: $scope.satShift2, threeshift: $scope.satShift3,},
              sunday:{oneshift:$scope.sunShift1, twoshift: $scope.sunShift2, threeshift: $scope.sunShift3,},
            },
        }
        // console.log(riderObj);
        $http({
            url: 'http://tiny-tiny.herokuapp.com/collections/rickshaw',
            method: 'post',
            data: JSON.stringify(riderObj)
        }).then(function(data) {
            console.table(data);
        }).catch(function() {
            console.error('availability error!!!');
        });
        $http({
          
        });
    };
}]);

},{}],2:[function(require,module,exports){
let mod = angular.module('ScheduleControllers');

mod.controller('ScheduleViewController', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {
    $scope.rickshawRiders = ScheduleService.getRickshawRiders();
    console.log($scope.rickshawRiders,"testing receiving rickshaw rider info");
    $scope.pedicabRiders = ScheduleService.getPedicabRiders();
    console.log($scope.pedicabRiders, 'testing pedicab info');


}]);

},{}],3:[function(require,module,exports){
let app = angular.module('ScheduleApp', ['ngRoute', 'ScheduleControllers', 'ScheduleServices']);
angular.module('ScheduleControllers', []);
angular.module('ScheduleServices', []);
// angular.module('ScheduleDirectives', []);        // create empty module

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/available', {
            templateUrl: 'templates/available.html',
            controller: 'AvailableController',
        })
        .when('/schedule-view', {
            templateUrl: 'templates/schedule-view.html',
            controller: 'ScheduleViewController',
        });
}]);

/* Controllers */
require('./controllers/available');
require('./controllers/schedule-view');

/* Services */
require('./services/schedule-info');

/* Directives */
// require('./directives/blah');

},{"./controllers/available":1,"./controllers/schedule-view":2,"./services/schedule-info":4}],4:[function(require,module,exports){
let mod = angular.module('ScheduleServices');

mod.factory('ScheduleService', ['$http', function ($http) {
    let rickshawRiders = [];
    let pedicabRiders = [];

    return {
        getRickshawRiders: function () {
            $http({
                method: 'get',
                url: 'http://tiny-tiny.herokuapp.com/collections/rickshaw',
            }).then(function (response) {
              let rickshawFilter = response.data.filter(function(x){
                return x.companyName == "rickshaw";
              });
              // console.log(rickshawFilter,"rickshaw filter");
                angular.copy(rickshawFilter, rickshawRiders);
            });

            return rickshawRiders;
        },
        getPedicabRiders: function () {
            $http({
                method: 'get',
                url: 'http://tiny-tiny.herokuapp.com/collections/rickshaw',
            }).then(function (response) {
              let pedicabFilter = response.data.filter(function(x){
                return x.companyName == "pedicab";
              });
                angular.copy(pedicabFilter, pedicabRiders);
            });

            return pedicabRiders;
        },
        
    };
}]);

},{}]},{},[3])