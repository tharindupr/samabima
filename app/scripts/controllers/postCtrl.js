'use strict';

/**
 * @ngdoc function
 * @name talkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the talkApp
 */
angular.module('talkApp')
  .controller('postCtrl', function ($scope,$http,$routeParams) {

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      method: "GET",
      url: "http://192.168.0.108/samabima/Samabima/public/post/" + $routeParams.id
    }).success(function(data, status, header, config){
          $scope.json=data;
          $scope.tags=new Array();
          console.log(data);
    });
});
