'use strict';

angular.module('myApp.config', [])
.value('FIREBASE_URL', 'https://blazing-inferno-7127.firebaseio.com/')

.factory('dbConfig', function authFactory($firebase, FIREBASE_URL) {
  var dataRef = new Firebase(FIREBASE_URL);

  return dataRef;

})
.factory('configA', function configFactory($firebase, FIREBASE_URL) {
  var configServiceObject = {

    dbConfig : {
      url : 'https://blazing-inferno-7127.firebaseio.com/',
      connectToBase : new Firebase(configServiceObject.dbConfig.url)
    }

  }

  return configServiceObject;
})
