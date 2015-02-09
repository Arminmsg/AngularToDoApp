'use strict'

define([
  'angular',
  'components/authService/authService',
  'angularfire'], function(angular, authService, angularfire) {
  angular.module('myApp.tasksService', [])

  .factory('task', function taskFactory(dbConfig, auth, $firebase) {

    var userId = auth.userId;
    var ref = dbConfig.child(userId + "/tasks");
    var sync = $firebase(ref);



    var tasksServiceObject = {

      getAsArray: function() {
        return sync.$asArray();
      },


      //Create for the logged in user a task and save it to firebase
      create: function(task) {
        if(task.description) {

          sync.$push(task);

        } else {
          alert("Enter a task");
        }
      },

      removeById: function(taskId) {
        ref.child(taskId).remove();
      },

      markAsDone: function(taskDone, taskId) {
        if(!taskDone) {
          ref.child(taskId).update({done: true});
        } else {
          ref.child(taskId).update({done: false});
        }

      }


    }

    return tasksServiceObject;

  })
});
