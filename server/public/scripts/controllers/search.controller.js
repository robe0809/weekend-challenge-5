myApp.controller('searchController', ['SearchService', function (SearchService) {

    var self = this;
    self.search = SearchService.search;
    self.resources = ["Films", "People", "Planets", "Species", "Starships", "Vehicles" ];
    
    self.searchResource = function (resource) { 
        self.resourceArray = self.search.list;
    }

    self.addFavorites = function (favorites) {
        SearchService.addFavorites(favorites);
    }

}]);