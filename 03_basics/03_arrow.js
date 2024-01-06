//TO refer current context use this keyword for instace: object having function and in  order to access object properties within function use this keyword
//this is applied to the object not in function
const user={
    username: "AKshay",
    price:999,

    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
       console.log(this); //define the current value of the object
    }
}
// console.log(user.WelcomeMessage());
// user.username="Test";
// console.log(user.WelcomeMessage());
//console.log(this); // op:- {}


// function test(){
//     let username="Akshay";
//     console.log(this.username);
// }

// test();

//arrow function is to remove function and use => after the bracket

const chai=()=>{

    let user="Akshay";
    console.log(this);
}
// chai();


// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(3,4))



//when we use curly bracket at that time we need to use return keyword
//Implicity return meaning we don't have to use return keyword 
//Expplicity return we have to use return keyword

//Implicity return
//const addTwo=(num1,num2)=>num1 +num2;
//or
//
//const addTwo=(num1,num2)=>(num1 +num2);

const addTwo=(num1,num2)=>({ username:"Akshay"}) //need to wrap in round bracket () while declaring the object if we don't use it gives undefined 
console.log(addTwo(3,4))
