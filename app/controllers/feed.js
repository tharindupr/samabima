'use strict';

app.
controller('FeedCtrl', function ($scope,$http) {

      $http({
      method: "GET",
      url: "http://hexmatter.cloudapp.net/post"}).success(function(data, status, header, config){
          $scope.json=data;
          $scope.tagss=new Array();
         

          for(var i = 0; i < data.length; i++)
              console.log(data[i]);
          {
      /*      $http({
                  method: "GET",
                  url: "http://192.168.0.108/samabima/Samabima/public/post/1"+"/tags"
                }).success(function(d, s, h, c)
                {
                  
                console.log(d);
                //$scope.tagss[d['post_id']]=d;

                   
                });*/


          }


    });
});


  
  

