katalogApp.controller("loginCtrl", ['$scope','$http', '$location','Registration', function($scope, $http, $location,Registration){
    $scope.submitUser = function(user,logForm){
        if(logForm.$valid){
            Registration.login($scope.user)
                .success(function(data){
                    sessionStorage.setItem ("lastSession", data.token);
                    $location.path('/').replace();
                })
                .error(function (err) {
                    console.log(err);
                });
        }
    }


}]);