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

    $scope.images = [1];
    console.log($scope.images);

    $scope.tags = ["Environment", "Water", "Pollution", "Police", "Garbage", "Parliament"];

    $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 2; i++) {
      $scope.images.push(last + i)
    };
}
    //notificationService.talk
  });


