(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyList();
    toBuyList.isEmpty = function (){
      return toBuyList.items.length == 0;
    };
    toBuyList.buy = function(itemNumber){
      ShoppingListCheckOffService.buy(itemNumber)
    };
  };

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtList();
   boughtList.isEmpty = function(){
     return (boughtList.items.length == 0);
    };
  };

function ShoppingListCheckOffService(){
  var service = this;
  service.toBuy = [
     { name: "cookies", quantity: 10 },
     { name: "cookies", quantity: 20 },
     { name: "bags of Chips", quantity: 5},
     { name: "apples", quantity: 10},
     { name: "onions", quantity: 5}
  ];
  service.bought = [];

  service.getToBuyList = function (){
    return service.toBuy
  };
  service.getBoughtList = function() {
    return service.bought
  };
  service.buy = function(itemNumber){
    var itemToMove = service.toBuy.splice(itemNumber,1)[0];
    console.log(itemToMove[0]);

    service.bought.push({
      name: itemToMove.name,
      quantity: itemToMove.quantity
    });
  };
};
})();
