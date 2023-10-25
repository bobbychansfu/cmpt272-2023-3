"use strict";
var st = "hello world";
var age = 6;
var address = '123 fake st';
/*
function add(a:number,b?:number){
    return (b)? a+b : a
}
*/
// narrowing
function padding(pad, input) {
    return (typeof pad === "number") ? " ".repeat(pad) + input
        : pad + input;
}
console.log(padding(6, "hello"));
console.log(padding("....", "hello"));
function add(a, b) {
    return a.length + b.length;
}
add([1, 2, 3], [4, 5, 6]);
