'use strict';

/**
 * @ngdoc function
 * @name talkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the talkApp
 */
angular.module('talkApp')
  .controller('MainCtrl', function ($scope,$http) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http({
      method: "GET",
      url: "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
    }).success(function(data, status, header, config){
      
      // returned data contains an array of 2 sentences
      for(line in data){
        newItem = ($scope.items.length+1)+". "+data[line];
        $scope.items.push(newItem);
      }
      $scope.loading = false;
    });

   $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);
    }
  };
});


