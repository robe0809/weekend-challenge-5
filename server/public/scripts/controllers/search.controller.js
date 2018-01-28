myApp.controller('searchController', ['SwapiService', function (SwapiService) {

    var self = this;
    self.swapi = SwapiService.swapi;
    self.resources = ["Films", "People", "Planets", "Species", "Starships", "Vehicles" ];
    
    self.searchResource = function (resource) { 
        self.films = self.swapi.list;
    }

    self.addFavorites = function (favorites) {
        SwapiService.addFavorites(favorites);
    }
}]);