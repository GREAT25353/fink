// Data types
// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol
// BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid)

const bigNumber = 2132424242343243246868n

// Reference (Non primitive)

// Array, Objects, Functions

// Array
const heros = ["shaktiman","naagraj","doga"]
// Object
let myObj = {
    name : "hitesh",
    age : 22, 
}
// function
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);


