 
angular.module('talkApp')
  .controller('post', function ($scope,$http) {


  

    $scope.postdata = function() {

    console.log($scope.anonymouse);

    var post = {
        title : $scope.title,
        message : $scope.message,
        tags : $scope.title
    };  

    var res = $http.post("http://192.168.0.108/samabima/Samabima/public/post/savepost", post);
    res.success(function(data, status, headers, config) {
      console.log(data);
    });


  }
   

});

