//Truthy and falsy 

//Truthy value

const userEmail="a@gmail.com";

if(userEmail)   //Truth value we does not use any comparision operator
{
    console.log("Got User Email");
}else{
    console.log("dont have user email")
}

//Falsy value

//false,0,-0, Big Int 0n,"",null,undefined,NaN

//Truthy value

//anything under string quotes"
// "0", 'false', " ", [],{},function(){}

//To check if the array is empty
const email=[];
if(email.length===0){
    console.log("Array is empty")
}


//to check if the object is empty or not
const obj={}
//(object.keys(obj))) where it become the array of the keys 
if(Object.keys(obj).length===0){
    console.log("empty object")
}

//Nullish coalescing Operator (??): null undefined
// when the response sometimes get the two value like null or undefined then we can use nullish coalescing operator
let val1;
// val1=5??10    //op:5

//val1=null ?? 10  //there might be complex function in place of 10 //op:10

//val1= undefined ?? 15 // op:15

val1= null ?? 10 ?? 15  // it will take 10 the first value

console.log(val1);

//Terninary Operator  

// condition ? true statement: false statement;

let score =100
score > 100 ? console.log("True"): console.log("false");

