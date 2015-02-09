require.config({
  paths: {
    angular: 'bower_components/angular/angular',
    angularRoute: 'bower_components/angular-route/angular-route',
    firebase: 'bower_components/firebase/firebase',
    angularfire: 'bower_components/angularfire/dist/angularfire',
    jQuery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min' ,
    bootstrap: 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min',
  },

  shim: {
    'angular'     : {
      'deps': ['jQuery', 'bootstrap'],
      'exports': 'angular'
    },
    'angularRoute': {
      'deps': ['angular']
    },
    'firebase'    : {
      'deps': ['angular']
    },
    'angularfire' : {
      'deps': ['angular', 'firebase']
    },
  }

});

require([
  'angular',
  'app'
  ], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      // bootstrap the app manually
      angular.bootstrap(document, ['myApp']);
    });
  }
);
