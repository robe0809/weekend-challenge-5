myApp.controller('searchController', ['SwapiService', function (SwapiService) {

    var self = this;
    self.swapi = SwapiService.swapi;

    self.resources = ["Films", "People", "Planets", "Species", "Starships", "Vehicles" ];

    self.searchResource = function () { 
        console.log(self.swapi.list);
        self.films = self.swapi.list;
    }
}]);