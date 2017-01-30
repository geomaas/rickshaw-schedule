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
