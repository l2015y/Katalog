katalogApp.controller("productDetalCtrl", ['$scope','$http','$location','$routeParams','Products', function($scope,$http,$location,$routeParams,Products){
    $scope.productID = $routeParams.productID;
    $http.get('http://smktesting.herokuapp.com/api/reviews/' + $routeParams.productID).success(function(data){
        $scope.reviews = data;
        console.log( $scope.reviews);
    })
        .error(function (err) {
            console.log(err);
        });

    $scope.products = Products.query(function(){
        $scope.detelProduct = function(){
            angular.forEach($scope.products, function(product){
                console.log(product);
                if(product.id == $scope.productID){
                    $scope.productid = product;
                }
            });
        };
        console.log($scope.detelProduct());
    }, function(err){
        console.log(err)
    });





}]);


