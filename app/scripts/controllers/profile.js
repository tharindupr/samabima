'use strict';

/**
 * @ngdoc function
 * @name talkApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the talkApp
 */
angular.module('talkApp')
  .controller('ProfileCtrl', function ($scope,notificationService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.fishSchool = [];
    $scope.talk =  notificationService.notification;

    
    function loadGitUrl() {
      notificationService.testGitUrl().then(function (data) {
        $scope.fishSchool = data;
      });
    };
    loadGitUrl();


  });
