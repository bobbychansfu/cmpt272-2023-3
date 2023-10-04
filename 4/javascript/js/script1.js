// var uname = window.prompt("Tell me your name", "Stan")
// window.alert("Hi " + uname)


// myfunc2("Bobby")

// var myfunc2 = function(name) {
//     console.log("Hello " + name + "!")
// }

// function myfunc(name){
//     console.log("Hello " + name + " !")
//     innerfunction()

//     function innerfunction(){
//         console.log("inner function!")
//     }
// }

// callbacks
/*
var i = 1

function process(){
    console.log("hello " + i)
    i++
}

var inter = window.setInterval(process, 1000)
*/

// Objects
var person = {
    name: 'bobby',
    age: 42,
    email: 'bobbyc@sfu.ca',
    address: {
        street: 'fake ave',
        number: 123
    },
    fullname: function(){
        return this.name + " " + this.age
    }
}

var arr = [1,2,3,4,5,person]
arr[5].address.street
