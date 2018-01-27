var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

// app configuration
myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'searchController as vm'
        })
        .when('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'favoritesController as vm'
        })
        .otherwise(
            { redirectTo: '/search' }
        );
});