'use strict';

angular.module('myApp.landingPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'landingPage/landing_page.html',
    controller: 'LandingPageController'
  })
}])
.controller('LandingPageController', ['$scope', 'auth', function($scope, auth) {

  //Triggers the if log in / log out is displayed
  $scope.userIsAuthenticated = auth.isUserLoggedIn;

  $scope.$watch(function() {
    return auth.isUserLoggedIn;
  }, function(newValue) {
    $scope.userIsAuthenticated = newValue;
  });

  $scope.userRegister = {email: '', password: ''};
  $scope.userLogin = {email: '', password: ''};


  //Method to register a user using the authService
  $scope.register = function() {
    auth.register($scope.userRegister);
    console.log(auth.userId);
  };

  //Method to login in a user using the authService
  $scope.login = function() {
    auth.login($scope.userLogin);
    console.log(auth.userId);
  };

  //Method to log out a user using the authService
  $scope.logout = function() {
    auth.logout();
    console.log(auth.userId);
  };

}]);
