'use strict';
var productApp = angular.module('cartApp', ['ui.router', 'ui.bootstrap', 'ngNotify']);


productApp.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'

        })
        .state('products', {
            url: '/products',
            templateUrl: 'product.html',
            controller: 'ProductCtrl'
        })
        .state('cart', {
            url: '/cart',
            templateUrl: 'cartdetail.html',
            controller: 'CartCtrl'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });


}]);