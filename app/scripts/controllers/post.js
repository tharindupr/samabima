 
angular.module('talkApp')
  .controller('post', function ($scope,$http) {

$scope.asda="sadsa";
  

    $scope.postdata = function() {

    
    var post = {
        title : $scope.title,
        content : $scope.message,
        is_anonymouse : $scope.anonymouse,
        tags : ["Education","Violence","Religion"],
        post_type_id: 1,
        owner_id : 1
        //tags : $scope.title

    };  

    var res = $http.post("http://192.168.0.108/samabima/Samabima/public/post", post);
    res.success(function(data, status, headers, config) {
      console.log(data);
    });


  }


  
   

});

