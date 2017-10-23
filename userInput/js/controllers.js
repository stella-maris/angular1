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
    
    $scope.secondTitle = "To do list";
    //Create model for user input
    //Add function to save items
    $scope.simpleUpdate = "Type anything...";
    $scope.updateSimple = function(input) {
        $scope.simpleUpdatePrinted = input;
    };
    $scope.delete = function () {
        $scope.simpleUpdatePrinted = "";
    }
    
    //To do
    $scope.toDo = "Type anything...";
    //Instantiate empty array outside of update function so that all items are added
    var items = [];
    $scope.update = function(input) {
        var item  = input;
        items.push(item);
//            console.log(items);
        $scope.toDoItem = items;
    };
}]);