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
      url: "http://192.168.0.108/samabima/Samabima/public/post"
    }).success(function(data, status, header, config){
      
          $scope.json=data;
          $scope.tags=new Array();
          for(var i = 0; i < data.length; i++)

          {
            $http({
                  method: "GET",
                  url: "http://192.168.0.108/samabima/Samabima/public/post/"+data[i]['post_id']+"/tags"
                }).success(function(d, s, h, c)
                {
                  
                
                $scope.tags[d['post_id']]=d;

                   
                });


          }


    });

    
   $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

  $scope.loadMore = function() {
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 8; i++) {
      $scope.images.push(last + i);
    }
  };

    $('#status_message').autogrow();

});


