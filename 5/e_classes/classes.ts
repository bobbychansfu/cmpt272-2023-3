class Person1 {
    name: string
    age?: number
    password: string
    static totalPeople = 0
    constructor(n:string,p:string,a?:number){
        this.name= n
        this.password = p
        this.age = a
        Person1.totalPeople++
    }
}

var p1 = new Person1('bobby','1234',42)
var p2 = new Person1('steve','1234',42)
var p3 = new Person1('jane','1234',42)
var p4 = new Person1('jenny','1234')
console.log(Person1.totalPeople)


