'use strict';

productApp.controller('ProductCtrl', ['$scope', '$rootScope', 'ProductService', 'ngNotify', function($scope, $rootScope, ProductService, ngNotify) {
    $scope.cartItem = {
        id: '',
        description: '',
        imagePath: '',
        price: 0,
        tag: ''
    };

    $scope.products = [];


    loadProducts();

    function loadProducts() {
        ProductService.getProducts().then(function(response) {
            $scope.products = response;
        });
    }


    $scope.addToCart = function(product) {
        $scope.cartItem.id = product.id;
        $scope.cartItem.description = product.description;
        $scope.cartItem.imagePath = product.imagePath;
        $scope.cartItem.price = product.price;
        $scope.cartItem.tag = product.tag;

        //console.log(product);
        ProductService.addCartItem(product).then(function(response) {
            //display cart item added
            ngNotify.set('Your product has been added.', {
                type: 'success',
                duration: 2000
            });
            //            console.log('product added to cart');
        });
    }


}]);


productApp.controller('CartCtrl', ['$scope', '$rootScope', 'ProductService', function($scope, $rootScope, ProductService) {
    var self = this;

    $scope.items = [];
    loadCartItems();
    $scope.totalPrice = 0;

    function loadCartItems() {
        ProductService.getCartItems().then(function(response) {
            $scope.items = response;
            $scope.cartItems = response;
            getTotalPrice();
        });

    }

    function getTotalPrice() {

        var total = 0;
        for (var i = 0; i < $scope.items.length; i++) {
            var item = $scope.items[i];
            total += (item.qty * item.price);

        }
        $scope.totalPrice = total;

    }




}]);