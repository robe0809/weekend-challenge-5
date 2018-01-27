myApp.controller('favoritesController', ['SwapiService', function (SwapiService) {

    var self = this;
    self.favorites = SwapiService.favorites;

    
}]);