/*
Type of obj
1. SingleTon   
   //Object.create
2. Object lierals

Singleton when you create an object using constructor
whenever we declared the object using literals is it not an single ton

NOte: In object key is a string
*/


//symbol declare
const mySys =Symbol("key1");

//object literals
const jsUser={
    name: "AKshay",
    age: 18,
    [mySys]: "myKey1",   // to use symbol as pair need to add in square bracket
    "fullName":"AKshay Ghatge",
    location: "Canada" ,
    email: "akshay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", " Tuesday"]
}

//console.log(jsUser[mySys]); // this is how you print the symbol


//In order to access the object
// console.log(jsUser.email);   // first way one can declare
//console.log(jsUser["email"]); // other way you can declaree always like this using square notation if the key is in string
//console.log(jsUser["fullName"]);


// to update the value of the object
jsUser.email="akshay@yahoo.in";
//console.log(jsUser["email"]);


//In order to lock the object so no more updating
//Object.freeze(jsUser);
jsUser.email="akshay@chatgpt.in";
//console.log(jsUser);


// FUnction you can treat as variable as well

jsUser.greeting=function(){
    console.log("Hello js User");
}

jsUser.greeting1=function(){
    console.log(`Hello js User, ${this.email} `);
}


//console.log(jsUser.greeting); //op: [Function (anonymous)]
console.log(jsUser.greeting());     //op: Hello js User
console.log(jsUser.greeting1()); 