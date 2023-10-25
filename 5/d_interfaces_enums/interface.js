"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 4] = "NORTH";
    Direction[Direction["SOUTH"] = 5] = "SOUTH";
    Direction[Direction["EAST"] = 6] = "EAST";
    Direction[Direction["WEST"] = 7] = "WEST";
})(Direction || (Direction = {}));
var pig = {
    name: 'porker',
    //appendages: 1,
    direction: Direction.EAST,
    speak: function (msg) {
        console.log('oink');
    }
};
/*
var dog: Animal = {
    name: 'scruffy'
}
*/
var person = {
    name: 'bobby'
};
/*
function makespeak(a:Animal){
    a.speak()
}
*/
// anon type
function makespeak(a) {
    a.speak("hello");
}
