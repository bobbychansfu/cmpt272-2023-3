// var uname = window.prompt("Tell me your name", "Stan")
// window.alert("Hi " + uname)

/******* Functions */ 

/*
var myfunc2 = function(name) {
    console.log("Hello " + name + "!")
}
myfunc2("Bobby")

function myfunc(name){
    console.log("Hello " + name + " !")
    innerfunction()

    function innerfunction(){
        console.log("inner function!")
    }
}

*/

/********* Callbacks */ 
/*
var i = 1

function process(){
    console.log("hello " + i)
    i++
}

var inter = window.setInterval(process, 1000)
*/

/********* Objects */ 

/*
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
*/

/********* Constructors */

function Person(n,a,e) {
    this.name = n
    this.age = a
    this.email = e
}

var p1 = new Person('Bobby',42,'bobbyc@sfu.ca')
p1.address = {street: 'fake ave',number: 123}
var p2 = new Person('Sarah',42,'sarah@sfu.ca')

Person.prototype.fullname = function(){
    return this.name + " " + this.age
}


/********* Arrays and Collections */ 

// var arr = [1,2,3,4,5,person]
// arr[5].address.street

/********** Adding to the DOM */

/*
var output = document.getElementById("output")
var content = document.createTextNode("hello world")
var p = document.createElement("p")
p.appendChild(content)
output.appendChild(p)
*/



// output -> p -> hello world

/********** Events */

function clicking(event){
    event.preventDefault()
    console.log(event.clientX + " " + event.clientY)
}

var button = document.getElementById("sub")
button.onclick = clicking