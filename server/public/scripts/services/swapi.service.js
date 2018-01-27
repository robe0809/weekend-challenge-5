myApp.service('SwapiService', ['$http', function($http){
    console.log('SwapiService loaded');

    const self = this;
    self.swapi = {list: []};
    self.favorites = {list: []};

    const films = "https://swapi.co/api/films/";
    const people = "https://swapi.co/api/people/";
    const planets = "https://swapi.co/api/planets/";
    const species = "https://swapi.co/api/species/";
    const starships = "https://swapi.co/api/starships/";
    const vehicles = "https://swapi.co/api/vehicles/";

    self.getFilms = function () {
        $http.get(films)
        .then(function (response) {
            self.swapi.list = response.data.results;
            console.log('successful get films: ', self.swapi.list);
        })
        .catch(function (response) {
            console.log('error on get films', error);
        });
    }

    self.getFavorites = function () {
        $http.get('/favorites')
        .then(function (response) {
            self.favorite.list = response.data
        })
        .catch(function (response) {
            console.log('error on get favorites', error);
        });
    }

    self.addFavorites = function (favorites) {
        $http.post('/favorites', favorites)
        .then(function (response) {
            self.getFavorites();
        })
        .catch(function (response) {
            console.log('error on service post', response);
        })
    }

    self.getFilms();
}]);