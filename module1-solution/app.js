(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchChecker);

LunchChecker.$inject = ['$scope'];
function LunchChecker($scope) {

  $scope.EvalMenu = function () {

    if(!$scope.menu){
      $scope.message = "Please enter data first"
    }
    else{
          var  numberOfDishes;

      numberOfDishes = $scope.menu.split(",").length;
      if (numberOfDishes < 4){
        $scope.message = "Enjoy!"
      }
      else{
        $scope.message = "Too much!"
      };
    };
  };

};

})();
