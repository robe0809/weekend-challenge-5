myApp.service('SearchService', ['$http', function($http){
    console.log('SwapiService loaded');

    const self = this;
    self.search = {list: []};
    self.favorites = {list: []};


    // getFilms through the API
    self.searchResource = function (selectedItem) {
        $http.get(`https://swapi.co/api/${selectedItem}/`)
        .then(function (response) {
            self.search.list = response.data.results;
            console.log('successful get resources: ', self.search.list);
        })
        .catch(function (response) {
            console.log('error on get resources', response);
        });
    };

/******************************* Favorites functions********************************/
    // add favorites to database
    self.addFavorites = function (favorites) {
        $http.post(`/favorites`, favorites)
        .then(function (response) {
            self.getFavorites();
        })
        .catch(function (response) {
            console.log('error on service post', response);
        });
    }

    // get favorites from database
    self.getFavorites = function () {
        $http.get('/favorites')
        .then(function (response) {
            console.log('getting favorites', response.data);
            self.favorites.list = response.data
        })
        .catch(function (response) {
            console.log('error on get favorites', response);
        });
    }

    // remove favorites 
    self.removeFavorites = function (favoritesId) {
        $http.delete(`/favorites/${favoritesId}`)
        .then(function (response) {
            console.log('removed favorite', response);
            self.getFavorites();
        })
        .catch(function (error) {
            console.log('error on delete service', response);
        });
    };

}]);