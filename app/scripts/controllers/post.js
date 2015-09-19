angular.module('talkApp')
  .controller('post', function ($scope,$http) {

  

  console.log($scope.title);

    $http({
      method: "GET",
      url: "http://192.168.0.108/samabima/Samabima/public/post"
    }).success(function(data, status, header, config){
      
         

    });

  });
