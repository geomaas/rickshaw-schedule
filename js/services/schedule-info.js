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
