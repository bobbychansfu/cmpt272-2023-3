"use strict";
class Person1 {
    constructor(n, p, a) {
        this.name = n;
        this.password = p;
        this.age = a;
        Person1.totalPeople++;
    }
}
Person1.totalPeople = 0;
var p1 = new Person1('bobby', '1234', 42);
var p2 = new Person1('steve', '1234', 42);
var p3 = new Person1('jane', '1234', 42);
var p4 = new Person1('jenny', '1234');
console.log(Person1.totalPeople);
