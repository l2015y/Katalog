
var katalogApp = angular.module("katalogApp",['ngRoute','ngResource']);

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
            controller: 'productDetalCtrl'


        })
        .otherwise({
            redirectTo: '/'
        });
}]);















