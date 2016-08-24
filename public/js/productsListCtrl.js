katalogApp.controller("productsListCtrl", ['$scope','$http', '$location','Products', function($scope, $http, $location,Products){
    $scope.products = Products.query();
}]);
