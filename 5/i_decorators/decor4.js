"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const allowlist = ["Jon", "Jane"];
const allowlistOnly = (target, memberName) => {
    let currentValue = target[memberName]; // memberName is the variable name
    console.log(target);
    console.log(memberName);
    Object.defineProperty(target, memberName, {
        set: (newValue) => {
            if (!allowlist.includes(newValue)) {
                return;
            }
            currentValue = newValue;
        },
        get: () => currentValue
    });
};
class Person {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    allowlistOnly
], Person.prototype, "name", void 0);
const person = new Person("Jon");
console.log(person.name);
person.name = "Peter";
console.log(person.name);
person.name = "Jane";
console.log(person.name);
