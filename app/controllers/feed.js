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
  

app.controller('FeedPostCtrl',function($scope,$http){
    
    
       
     $scope.content="";


     $scope.tags = [];

     $scope.ta=[];
      $scope.postdata = function(t,c) {

            for(var i in $scope.tags)
              {
             
                $scope.ta[i]=$scope.tags[i]['text'];
              }
          console.log(t);
            
            var post = {
                title : t,
                content : c,
                is_anonymouse : $scope.anonymous,
                tags : $scope.ta ,
                post_type_id: 1,
                owner_id : 1
                //tags : $scope.title

            };  
            console.log(post);
            var res = $http.post("http://hexmatter.cloudapp.net/post/", post);
            res.success(function(data, status, headers, config) {
              location.reload();
              
            });

         }      
});
  


