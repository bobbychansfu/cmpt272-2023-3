class Person {
    name;
    birthday;
    constructor(n,b) {
        this.name = n
        this.birthday = b
    }
}

var person_object1 = new Person('bobby','05-11-1976')
var person_object2 = new Person('steve','05-11-1976')
var person_object3 = new Person('jane','05-11-1976')
var person_object4 = new Person('rachel','05-11-1976')

// Default Params

function greeting(t1, t2="world") {
    console.log(t1 + " " + t2)
}

// greeting("hello")
// greeting("hello","bobby")

// Template strings

// var pname = 'bobby'
/*
var age = 42

console.log(`

    <table>
        <tr>
            <td> ${person_object1.name} </td> <td> ${age} </td>
        </tr>
    </table>

`)
*/

// var const let

/*
var myfunc = function() {
    if (true) {
        var aa = 23
        let bb = 12 // only within if statement
        gg = 10
    }
    // console.log(aa)
    // console.log(bb)
}

myfunc()
console.log(gg)
*/

var arr = [12,34,5,56,4,111]

/*
for (let i in arr){
    arr[i]
    i
}

arr.forEach(function(a){
    console.log(a)
})
*/

// arrow functions

// arr.forEach((a) => {
//     console.log(a)
// })

/*
var obj = {
    i: 10,
    c1: function() {
        console.log(this)
    },
    c2: () => {
        console.log(this)
    }
}

obj.c1()
obj.c2()
*/

// use => and not function

/*
var obj2 = {
    id: 42,
    counter: function() {
        setTimeout(() => {
            console.log(this.id),500
        })
    }
}

obj2.counter()
*/

// use function and not =>

function Pig(name){
    this.pigname = name
    this.sayName = function(){
        console.log(this.pigname)
    }
}

var p = new Pig("Ham")
p.sayName()
