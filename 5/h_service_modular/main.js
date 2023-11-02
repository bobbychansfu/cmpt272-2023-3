System.register(["./peopleService", "./Person"], function (exports_1, context_1) {
    "use strict";
    var peopleService_1, Person_1, pc;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (peopleService_1_1) {
                peopleService_1 = peopleService_1_1;
            },
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }
        ],
        execute: function () {
            pc = new peopleService_1.PeopleController();
            document.getElementById("create").addEventListener('click', function () {
                var new_person = new Person_1.Person("bob", 42);
                pc.add(new_person);
                console.log("added id: " + new_person.id);
            });
            document.getElementById("getAll").addEventListener('click', function () {
                console.log(pc.getAll());
            });
        }
    };
});
