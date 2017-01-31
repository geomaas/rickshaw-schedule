let mod = angular.module('ScheduleServices');

mod.factory('ScheduleService', ['$http', function ($http) {
    let riders = [];

    return {
        /* GET request for book list */
        getRiders: function () {
            $http({
                method: 'get',
                url: 'http://tiny-tiny.herokuapp.com/collections/rickshaw',
            }).then(function (response) {
                console.table(response.data);

                // angular.copy(response.data, books);
            });

            return riders;
        },
        // /* POST request to update one book */
        // borrowBook: function (book) {
        //
        // },
        // /* POST request to update one book */
        // returnBook: function (book) {
        //
        // },
    };
}]);
