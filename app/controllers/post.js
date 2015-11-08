'use strict';


app.
controller('PostCtrl', function ($scope,$http,$stateParams) {
$scope.votemagnitude=0;
$http({
      method: "GET",
      url: "http://hexmatter.cloudapp.net/post/1"}).success(function(data, status, header, config){
          $scope.json=data;
          $scope.tagss=new Array();
          console.log($scope.json['post_id']);
          $scope.upvotes=$scope.json['upvote_count'];
          $scope.downvotes=$scope.json['downvote_count'];
          $scope.votemagnitude=$scope.upvotes-$scope.downvotes;
		  //console.log($scope.upvotes);
         
});


function downvote(){

		$scope.downvote-=1;

}      

function downvote(){

		$scope.upvote+=1;


}
      

});



app.controller('FeedTagCtrl',function($scope,$http){
    
     
       
       $http({
            method: "GET",
            url: "http://hexmatter.cloudapp.net/post/1/tags"}).success(function(data, status, header, config){

                    delete data['post_id'];
                    $scope.tag=data;
                    

            });

        
        
            

});