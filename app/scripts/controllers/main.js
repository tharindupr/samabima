'use strict';

/**
 * @ngdoc function
 * @name talkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the talkApp
 */
angular.module('talkApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.images = [1, 2,3];

    $scope.loadMore = function() {
      var last = $scope.images[$scope.images.length - 1];
      for(var i = 1; i <= 3; i++) {
        $scope.images.push(last + i);
      }
    };

    //notificationService.talk
  });


