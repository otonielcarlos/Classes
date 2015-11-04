var app = angular.module("MyApp", []);

app.controller("PokeController", ["$scope", "$http", function ($scope, $http) {

    $http.get("http://pokeapi.co/api/v1/pokedex").then(function (response) {
        $scope.pokemon = response.data.objects[0].pokemon;

    });

}]);