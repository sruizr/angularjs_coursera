(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .controller('FoundController', FoundController)
      .service("MenuSearchService", MenuSearchService);


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
      var menu = this;

    }
  }

  FoundController.$inject = ['MenuSearchService'];

  function FoundController(MenuSearchService) {
    var found = this;

    found.items = function() {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      promise.then(function(fullMenu) {
        menu.foundItems = fullMenu.menu_items;
      });
    };

    function MenuSearchService($http) {
      var service = this;

      service.setSearchTerm = function(searchTerm) {
        service.searchTerm = searchTerm;
      };

      service.getMatchedMenuItems = function() {

        return $http({
            method: "GET",
            url: "http://davids-restaurant.herokuapp.com/menu_items.json"
          })
          .then(function(result) {
            var fullMenu = result.data;
            return fullMenu;
          });
      };
    }
    MenuSearchService.$inject = ['$http'];
  }
)();
