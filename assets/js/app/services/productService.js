productApp.service('ProductService', function($http, $q) {
    return {
        'getProducts': function() {
            var defer = $q.defer();
            $http.get('/products/find').success(function(data) {
                defer.resolve(data);
            }).error(function(err) {
                defer.reject(err);
            });
            return defer.promise;

        },
        'getCartItems': function() {
            var defer = $q.defer();
            $http.get('/cartitem/find').success(function(data) {
                defer.resolve(data);
            }).error(function(err) {
                defer.reject(err);
            });
            return defer.promise;

        },
        'addCartItem': function(item) {
            var defer = $q.defer();
            $http.post('/cartItem/addCartItem', item).success(function(resp) {
                defer.resolve(resp);
            }).error(function(err) {
                defer.reject(err);
            });
            return defer.promise;
        },
        'removeCartItem': function(item) {
            var defer = $q.defer();
            $http.post('/cartItem/removeCartItem', item).success(function(resp) {
                defer.resolve(resp);
            }).error(function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }

    }
});