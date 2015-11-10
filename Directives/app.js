var app = angular.module("MyApp", []);

app.controller("DirectiveController", ["$scope", function ($scope) {

    $scope.addressBook = [
        {
            name: "Joe Schmoe",
            phone: 8011234567,
            email: "jschmoe@schmoe.com"
            },
        {
            name: "Jade Schmoe",
            phone: 832098231,
            email: "jadeschmoe@schmoe.com"
            },
        {
            name: "Jimmy Schmoe",
            phone: 098234986,
            email: "jimmyschmoe@schmoe.com"
            },
        {
            name: "Aunt Sue Schmoe",
            phone: 5643245345,
            email: "auntsueschmoe@schmoe.com"
            },
        ];


}]);

app.directive("contactCard", function () {

    return {
        restrict: "EA",
        templateUrl: "templates/contact-card.html"
    }
});