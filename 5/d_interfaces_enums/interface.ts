enum Direction {
    NORTH = 4,
    SOUTH,
    EAST,
    WEST
}

interface Animal {
    name: string;
    appendages?: number;
    direction: Direction;
    speak: (x:string) => void
}

var pig: Animal = {
    name: 'porker',
    //appendages: 1,
    direction: Direction.EAST,
    speak: function(msg: string){
        console.log('oink')
    }
}

/*
var dog: Animal = {
    name: 'scruffy'
}
*/

var person = {
    name: 'bobby'
}
/*
function makespeak(a:Animal){
    a.speak()
}
*/
// anon type

function makespeak(a:{speak:(x:string)=>void}){
    a.speak("hello")
}


