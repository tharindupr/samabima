'use strict';

app.
controller('FeedCtrl', function ($scope,$http) {

      $http({
      method: "GET",
      url: "http://hexmatter.cloudapp.net/post"}).success(function(data, status, header, config){
          $scope.json=data;
          $scope.tagss=new Array();
         
         angular.forEach($scope.json, function(json){

           

           $http({
                  method: 'GET',
                  url: 'http://hexmatter.cloudapp.net/post/'+json['post_id']+'/tags'
                  }).then(function successCallback(response) {
                          
                              console.log(response);
                  }, 
                  function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                  });

          });


    });
});


  
  

