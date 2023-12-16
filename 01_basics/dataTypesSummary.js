/**
 * Two typw of Data Types
 * Primitive and Non Primitive
 * # Primitive (Call by value) oringinal value does not change, it gives a copy of the data
 * 7 types
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. null (Empty)   null type of is object
 * 5. undefined (Variable declared memory space declared but value not assigned)
 * 6. Symbol   (To make it unique) 
 * 7.BigInt
 * 
 * 
 * 
 * 
 * # NonPrimitive (call by reference, orignal value get changes)
 * 1. Arrays
 * 2. Objects
 * 3. Functions
 * 
 * 
 */

//bigInt
const bigNumber=123333333333322551515n;


//Symbol
const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)

// Array, Objects, Functions
//Array
const heros=["shaktiman","nagraj","doga"];

//object
let myobj={

        name:"AKshay",
        age:22,
}

const myFunction=function(){
    console.log("Hello world");
}

//find data type
console.log(typeof bigNumber)

