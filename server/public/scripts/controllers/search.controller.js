myApp.controller('searchController', ['SearchService', function (SearchService) {

    var self = this;
    self.search = SearchService.search;
    self.resources = ["films", "people", "planets", "species", "starships", "vehicles" ];
    self.resourceArray = self.search.list;

    self.searchResource = function (selectedItem) { 
        SearchService.searchResource(selectedItem);
    }

    self.addFavorites = function (favorites) {
        SearchService.addFavorites(favorites);
    }

}]);