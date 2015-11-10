'use strict';

app
    // login controller
    .controller('LoginCtrl', [
        '$rootScope', '$scope','$http', function($rootScope, $scope, $http) {

            $http({
                method: "GET",
                url: "http://hexmatter.cloudapp.net/post"}).success(function(data, status, header, config){
                console.log(data);
                $scope.json=data;
            });
        }
    ]);


