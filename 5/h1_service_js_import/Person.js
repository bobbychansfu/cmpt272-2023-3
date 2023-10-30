System.register([], function (exports_1, context_1) {
    "use strict";
    var Person;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Person = class Person {
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                    this.id = Person.num;
                    Person.num++;
                }
            };
            exports_1("Person", Person);
            Person.num = 0;
        }
    };
});
