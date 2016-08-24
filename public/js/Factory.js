katalogApp.factory('Products',[
    '$resource', function($resource){
        return $resource('http://smktesting.herokuapp.com/api/products/',{})
    }
]);

katalogApp.factory('Registration',[
    '$http', function($http){
        return {
            register: function (newUser) {
                return $http
                    .post('http://smktesting.herokuapp.com/api/register/', newUser)
            },

            login: function (user){
                return $http
                    .post('http://smktesting.herokuapp.com/api/login/',user)
            }

        }


    }
]);

