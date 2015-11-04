var Person = function (personName, personAge, personOccupation) {
    this.name = personName;
    this.age = personAge;
    this.occupation = personOccupation;
    this.speak = function(){
        console.log('Hi, my name is ' + this.name + ' and Im ' + this.age + ' years old');
    }
}

Person.prototype.complain = function() {
    console.log("My name is " + this.name + " and I'm bored");
}

var bob = new Person('Bob', 30, 'Burgers');
bob.speak();
var julie = new Person('Julie', 14, 'Student')
julie.speak();




for (key in bob){

}