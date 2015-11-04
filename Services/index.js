var app = angular.modue("Services",[]);



app.service("NameService", function(){

this.name = 'Bob Ziroll';
this.age = 30;

});
app.controlller("MainController",['$scope',function($scope) {

    alert('Name: ' + NameService.name + 'Age: ' + NameService.age);
    
}]);