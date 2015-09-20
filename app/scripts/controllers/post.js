 
angular.module('talkApp')
  .controller('post', function ($scope,$http) {

$scope.asda="sadsa";
$scope.tags=[];
  $scope.loadTags = function(query) {
            return [{text:'Enviroment'},{text:'Parliment'},{text:'Water'},{text:'Pollution'},{text:'Religion'},{text:'WaterBoard'},{text:'Law'}];
          };
$scope.ta=[]





    $scope.postdata = function() {

      for(i in $scope.tags)
        {
       
          $scope.ta[i]=$scope.tags[i]['text'];
        }
      
    
    var post = {
        title : $scope.title,
        content : $scope.message,
        is_anonymouse : $scope.anonymouse,
        tags : $scope.ta ,
        post_type_id: 1,
        owner_id : 1
        //tags : $scope.title

    };  

    var res = $http.post("http://192.168.0.108/samabima/Samabima/public/post", post);
    res.success(function(data, status, headers, config) {
      location.reload();
      
    });


  }


  
   

});

