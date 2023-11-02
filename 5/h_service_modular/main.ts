import { PeopleController } from "./peopleService"
import { Person } from "./Person"

var pc = new PeopleController()

document.getElementById("create")!.addEventListener('click', function(){
    var new_person = new Person("bob",42)
    pc.add(new_person)
    console.log("added id: " + new_person.id)
})

document.getElementById("getAll")!.addEventListener('click', function(){
    console.log(pc.getAll())
})

