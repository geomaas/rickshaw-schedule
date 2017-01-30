(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let mod = angular.module('ScheduleControllers');

mod.controller('AvailableController', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {
    // $scope.books = BookService.getBooks();
}]);

},{}],2:[function(require,module,exports){
let mod = angular.module('ScheduleControllers');

mod.controller('ScheduleViewController', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {
    // $scope.books = BookService.getBooks();
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
// require('./directives/book');

},{"./controllers/available":1,"./controllers/schedule-view":2,"./services/schedule-info":4}],4:[function(require,module,exports){
let mod = angular.module('ScheduleServices');

mod.factory('ScheduleService', ['$http', function ($http) {
    // let books = [];

    return {
        // /* GET request for book list */
        // getBooks: function () {
        //     $http({
        //         method: 'get',
        //         url: 'http://localhost:7000/library/books'
        //     }).then(function (response) {
        //         console.table(response.data.books);
        //
        //         angular.copy(response.data.books, books);
        //     });
        //
        //     return books;
        // },
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

},{}]},{},[3])