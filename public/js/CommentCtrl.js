katalogApp.controller("CommentCtrl", ['$scope','$http', '$location','$routeParams', function($scope, $http, $location, $routeParams){
    $scope.productID = $routeParams.productID;
    $scope.submitComment = function(comment,commentForm) {
        if (commentForm.$valid) {
            $scope.token = sessionStorage.getItem("lastSession");
            console.log($scope.token);

            $http.post('http://smktesting.herokuapp.com/api/reviews/' + $routeParams.productID,$scope.comment, {
                headers: {"Authorization":"Token " + $scope.token}})

                .success(function(response){

                    $http.get('http://smktesting.herokuapp.com/api/reviews/' + $routeParams.productID)

                        .success(function(data){
                            $scope.reviews = data;
                            console.log($scope.reviews);
                        })

                })
                .error(function (err) {
                    console.log(err);
                });


        }
    }




}])