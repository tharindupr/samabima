'use strict';


app.controller('PostCtrl', function ($scope,$http,$stateParams) {

$scope.votemagnitude=0;
$scope.button1_clicked=false;
$scope.button2_clicked=false;
$http({
      method: "GET",
      url: "http://hexmatter.cloudapp.net/post/"+$stateParams.id}).success(function(data, status, header, config){
          $scope.json=data;
          $scope.tagss=new Array();
          $scope.upvote=parseInt($scope.json['upvote_count']);
          $scope.downvote=parseInt($scope.json['downvote_count']);
          $scope.votemagnitude=$scope.upvote-$scope.downvote;
		  //console.log($scope.downvotes+1);
         
});

 $scope.upVote = function() {
 	$scope.upvote+=1;
 	$scope.votemagnitude=$scope.upvote-$scope.downvote;
 	console.log($scope.upvote);
 	$scope.button1_clicked=true;


 }

 $scope.downVote = function() {
 	$scope.downvote+=1;
 	$scope.votemagnitude=$scope.upvote-$scope.downvote;
 	console.log(2);
 	$scope.button2_clicked=true;

 }


 $scope.coment="";     

});



app.controller('FeedTagCtrl',function($scope,$http){
    
     
       
       $http({
            method: "GET",
            url: "http://hexmatter.cloudapp.net/post/1/tags"}).success(function(data, status, header, config){

                    delete data['post_id'];
                    $scope.tag=data;
                    

            });

        
        
            

});



app.controller('CommentsCtrl',function($scope,$http,$stateParams){


	$scope.content="";

	$scope.postComment = function(){
    		var comment = {
                title : "",
                content : $scope.content,
                is_anonymouse : false,
                post_type_id: 2,
                //tags : $scope.title

            };  


            console.log(comment);
            var res = $http.post("http://hexmatter.cloudapp.net/post/"+$stateParams.id+"/comment", comment);
            res.success(function(data, status, headers, config) {
              location.reload();
              
            });

   };
});