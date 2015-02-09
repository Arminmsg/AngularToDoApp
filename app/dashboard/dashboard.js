'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'dashboardController'
  });
}])

.controller('dashboardController', ['$scope', 'task', function($scope, task) {

  $scope.taskList = task.getAsArray();

  $scope.task = {
    description: '',
    done: false
  };

  $scope.markTaskAsDone = function(taskDone, taskId) {
    task.markAsDone(taskDone, taskId);
  };

  $scope.createTask = function() {
    task.create($scope.task);

    $scope.task = {
      description: '',
      done: false
    };

  };

  $scope.delteTask = function(taskId) {
    task.removeById(taskId);
  };

  $scope.updateTask = function() {

  };



}]);
