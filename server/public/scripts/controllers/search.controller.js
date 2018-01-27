myApp.controller('searchController', ['SwapiService', function (SwapiService) {

    var self = this;
    self.swapi = SwapiService.swapi;

    self.resources = ["Films", "People", "Planets", "Species", "Starships", "Vehicles" ];

    self.addFavorites = function (favorites) {
        SwapiService.addFavorites(favorites);
    }
    
    self.searchResource = function (resource) { 
        console.log(self.swapi.list);
        self.films = self.swapi.list;
    }
}]);