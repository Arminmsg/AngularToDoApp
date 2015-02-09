'use strict';

angular.module('myApp.authService', [
])

.factory('auth', function authFactory($rootScope, $location, dbConfig) {

  //Create connection to the firebase
  var ref = dbConfig;

  var authServiceObject = {

    isUserLoggedIn : null,
    userId: null,

    //Register user and login if the registration was successfull
    register: function(user) {
      ref.createUser(user, function(err) {
        if(err === null) {
          //Registration was successfull
          $rootScope.$apply(function() {
            authServiceObject.isUserLoggedIn = true;
          });
          authServiceObject.login(user);
        }
      });
    },

    login: function(user) {
      ref.authWithPassword(user, function(data, authData) {
        //data returns null if login was successfull;
        if(data) {
          authServiceObject.isUserLoggedIn = false;

        } else {
            authServiceObject.isUserLoggedIn = true;
            $rootScope.$apply(function() {

              authServiceObject.userId = authData.uid.split(":")[1];
              $location.path("/dashboard");
              console.log(authServiceObject.userId);
            });

        }
      });
    },

    logout: function() {
      ref.unauth();
      authServiceObject.isUserLoggedIn = false;
      authServiceObject.userId = null;
      $location.path("/");
    }

  };

  //Determine if current user is logged in
  function authDataCallback(authData) {
    if(authData) {
      authServiceObject.isUserLoggedIn = true;
      authServiceObject.userId = authData.uid.split(":")[1];

    } else {
      authServiceObject.isUserLoggedIn = false;
      authServiceObject.userId = null;
    }
  }
  ref.onAuth(authDataCallback);



  return authServiceObject;

})
