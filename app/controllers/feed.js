'use strict';

app.
controller('FeedCtrl', function ($scope,$http) {

      $http({
      method: "GET",
      url: "http://hexmatter.cloudapp.net/post"}).success(function(data, status, header, config){
          $scope.json=data;
          $scope.tagss=new Array();
         
       

    });
});


app.controller('FeedTagCtrl',function($scope,$http){
    
     
       
       $http({
            method: "GET",
            url: "http://hexmatter.cloudapp.net/post/"+$scope.post['post_id']+"/tags"}).success(function(data, status, header, config){

                    delete data['post_id'];
                    $scope.tag=data;

            });


});
  
  

