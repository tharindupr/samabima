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

    $scope.profile = "active in";
    $scope.problem ="";
    $scope.comments ="";
    $scope.reputation ="";
    $scope.iswatch = false;

    function init() {
      $scope.iswatch = true;
      $scope.profile = "active in";
      if (!$scope.$$phase)
        $scope.$apply();
    }

    function clearTabClass() {
      $scope.profile = "";
      $scope.problem ="";
      $scope.comments ="";
      $scope.reputation ="";
    }

    $scope.fishSchool = [];
    $scope.talk =  notificationService.notification;


    function loadGitUrl() {
      notificationService.testGitUrl().then(function (data) {
        $scope.fishSchool = data;
      });
    }
    loadGitUrl();

    $scope.tabClick = function (data) {
      if(data===1){
        clearTabClass();
        $scope.profile = "active in";
      }else if(data ===2){
        clearTabClass()
        $scope.problem = "active in";
      }else if(data ===3){
        clearTabClass()
        $scope.comments = "active in";
      }else if(data ===4){
        clearTabClass()
        $scope.reputation = "active in";
      }else{
        $scope.profile = "active in";
      }

    }
    $scope.$watch('profile', function() {
    if( $scope.iswatch === false){
        init();
    }
    });




  });
