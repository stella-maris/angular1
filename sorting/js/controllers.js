var maryApp = angular.module('maryApp', []);
maryApp.controller('MainController', ['$scope', function($scope) {
    $scope.title = "Mary's AngularJS website";
    // Define cards model which stores an array of objects.
    $scope.cards = [
        { "number": "2", "suit": "Hearts", "numOrd": 2 },
        { "number": "10", "suit": "Spades", "numOrd": 10 },
        { "number": "5", "suit": "Spades", "numOrd": 5 },
        { "number": "Q", "suit": "Hearts", "numOrd": 12 }
    ];
    //Set a default order
    $scope.orderProp = "numOrd";
}]);