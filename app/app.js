'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.landingPage',
  'myApp.dashboard',
  'myApp.authService',
  'myApp.tasksService',
  'myApp.config',
  'firebase'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'})
}])
.run(function($rootScope, $location, auth) {
  $rootScope.$on( "$routeChangeStart", function() {
    //user logged in redirect to dashboard;
    //TODO save current url if user isn't authenticated redirect to login and then redirect back
    if( !auth.isUserLoggedIn ) {
      $location.path("/");
    } else {
      $location.path("/dashboard");
      //console.log("auth.isUserLoggedIn: " + auth.isUserLoggedIn);
    }
  });
});
