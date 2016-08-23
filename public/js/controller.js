
var katalogApp = angular.module("katalogApp",['ngRoute']);

katalogApp.config(['$routeProvider', function($routeProvide){
    $routeProvide
        .when('/',{
            templateUrl:'templates/home.html',
            controller:'productsListCtrl'
        })
          .when('/register',{
            templateUrl: 'templates/register.html',
            controller:'registerCtrl'
        })
        .when('/login',{
            templateUrl: 'templates/login.html',
            controller:'loginCtrl'
        })
        .when('/products/:productID',{
            templateUrl:'templates/productDetails.html',
            controller:'productDetalCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

katalogApp.controller("productsListCtrl", ['$scope','$http', '$location', function($scope, $http, $location){
    $http.get( 'http://smktesting.herokuapp.com/api/products/').success(function(data,status,headers,config){
        $scope.products = data;
        console.log($scope.products);
    })
        .error(function (err) {
            console.log('Что-то пошло не так');
        })

}]);




katalogApp.controller("registerCtrl", ['$scope','$http', '$location', function($scope, $http, $location){
    $scope.submitNewUser = function(newUser,regForm){
        if(regForm.$valid){
            $http.post('http://smktesting.herokuapp.com/api/register/',$scope.newUser).
                success(function(data){
                    console.log(data);
                    $location.path('/').replace();
                })
        }
    }


}]);


katalogApp.controller("loginCtrl", ['$scope','$http', '$location', function($scope, $http, $location){
    $scope.submitUser = function(user,logForm){
        if(logForm.$valid){
            $http.post('http://smktesting.herokuapp.com/api/login/',$scope.user).
                success(function(data){
                    console.log(data);
                    $location.path('/').replace();
                })
        }
    }


}]);


katalogApp.controller("productDetalCtrl", ['$scope','$http','$location','$routeParams', function($scope,$http,$location,$routeParams){
    $scope.productID = $routeParams.productID;
    $http.get('http://smktesting.herokuapp.com/api/reviews/' + $routeParams.productID).success(function(data,status,headers,config){
        $scope.reviews = data;
        console.log( $scope.reviews);
    })
        .error(function (err) {
            console.log('Что-то пошло не так');
        });

    $http.get('http://smktesting.herokuapp.com/api/products/').success(function(data,status,headers,config){
        $scope.products = data;
        console.log($scope.products);
        $scope.detelProduct = function(){
            angular.forEach($scope.products, function(product){
                console.log(product);
                if(product.id == $scope.productID){
                    $scope.productid = product;
                    console.log($scope.productid);

                }

            });

        };
        console.log($scope.detelProduct());

    })
        .error(function (err) {
            console.log('Error');
        });




}]);


