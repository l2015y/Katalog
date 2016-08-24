katalogApp.controller("registerCtrl", ['$scope','$http', '$location','Registration', function($scope, $http, $location,Registration){
    $scope.submitNewUser = function(newUser,regForm) {
        if (regForm.$valid) {
            Registration.register($scope.newUser).success(function (data) {
                sessionStorage.setItem("lastSession", data.token);
                $location.path('/').replace();
            })
                .error(function (err) {
                    console.log(err);
                })
        }
    }



}]);
