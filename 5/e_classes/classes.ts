interface hasCoord {
    x: number
}
/*
interface hasStrength {
    strength:number,
    ability:string
}
*/
//abstract 
class Person implements hasCoord {
    x:number
    static totalPeople = 0
    constructor(public name:string,private password:string,x:number,protected age:number){
        this.x = x
        Person.totalPeople++
    }
    usesPwd() {
        var p = this.password
    }
}

class Student extends Person {
    sn:string
    constructor(name:string, pw: string, x: number, a: number, sn:string, public gpa:number){
        super(name,pw,x,a)
        this.sn = sn
    }
    myfunc() {
        var aa = this.age // valid
    }
}

class Teacher extends Person {

}

var p1 = new Person('bobby','1234',6,42)
var p2 = new Person('steve','1234',6,42)
var p3 = new Person('jane','1234',6,42)
console.log(Person.totalPeople)
var s1 = new Student('jay','1234',6,24,'12345678',3.4)
// console.log(p1.password)


