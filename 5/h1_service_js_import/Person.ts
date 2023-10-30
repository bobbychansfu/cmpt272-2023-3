export class Person {
    static num = 0
    id: number
    constructor(public name:string, public age: number) {
        this.id = Person.num
        Person.num++
    }
}