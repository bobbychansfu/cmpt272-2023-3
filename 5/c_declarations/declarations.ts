var st:string = "hello world"
var age:number = 6
var address = '123 fake st'
/*
function add(a:number,b?:number){
    return (b)? a+b : a
}
*/
// narrowing
function padding(pad:number|string, input: string){
    return (typeof pad === "number")? " ".repeat(pad) + input 
               : pad + input
}

console.log(padding(6,"hello"))
console.log(padding("....","hello"))


type thingsWithLengthProperty = any[] | string

// overload

function add(a:string,b:string):number
function add(a:any[],b:any[]):number
function add(a:thingsWithLengthProperty,b:thingsWithLengthProperty):number{
    return a.length + b.length
}
add([1,2,3],[4,5,6])