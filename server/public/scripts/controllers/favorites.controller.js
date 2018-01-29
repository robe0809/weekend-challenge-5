myApp.controller('favoritesController', ['SearchService', function (SearchService) {

    var self = this;
    self.favorites = SearchService.favorites;
    
    self.removeFavorites = function (favorite) {
        SearchService.removeFavorites(favorite);
    }

}]);