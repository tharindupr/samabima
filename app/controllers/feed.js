'use strict';

app.
controller('FeedCtrl', function ($scope,$http) {

      $http({
      method: "GET",
      url: "http://hexmatter.cloudapp.net/post"}).success(function(data, status, header, config){
          $scope.json=data;
          $scope.tagss=new Array();
         
         angular.forEach($scope.json, function(json){
  // Here, the lang object will represent the lang you called the request on for the scope of the function
            $http.get('http://hexmatter.cloudapp.net/post/1/tags', function(res) {
              // Do whatever you want with lang here. lang will be the same object you called the request with as it resides in the same 'closure'
              console.log(res);
            });
          });


    });
});


  
  

