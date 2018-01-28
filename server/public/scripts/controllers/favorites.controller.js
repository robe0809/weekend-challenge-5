myApp.controller('favoritesController', ['SwapiService', function (SwapiService) {

    var self = this;
    self.favorites = SwapiService.favorites;
    
    self.addFavorites = function (favorites) {
        console.log('yea', self.favorites.list);
        self.favorites = self.favorites.list;
    }
    self.removeFavorites = function (favorites) {
        SwapiService.removeFavorites(favorites);
        self.favorites = self.favorites.list
    }
    

}]);