System.register([], function (exports_1, context_1) {
    "use strict";
    var PeopleController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PeopleController = class PeopleController {
                constructor() {
                    this.people = [];
                }
                add(p) {
                    this.people.push(p);
                    localStorage.UserArray = JSON.stringify(this.people);
                }
                getAll() {
                    // return this.people
                    return JSON.parse(localStorage.UserArray);
                }
                delete(id) {
                    this.people = this.people.filter((p) => {
                        return p.id != id;
                    });
                    localStorage.UserArray = JSON.stringify(this.people);
                }
            };
            exports_1("PeopleController", PeopleController);
        }
    };
});
