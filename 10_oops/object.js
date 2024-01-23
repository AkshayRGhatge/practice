function multipleBy5(num){
    return num*5;
}

//multipleBy5(5);
multipleBy5.power=2   //function is also act as object and function as well, in js at the end of the day meet to an object Array--> object --> null , function-->object-->null , string--> object-->null
console.log(multipleBy5.power)//op:2
console.log(multipleBy5.prototype)//op:- {}


function createUser(username,score){
    this.username=username;  //where this.username left side is a variable and username right side is a parameter
    this.score=score;

   // return this;//will pass the variable
}

createUser.prototype.increment=function(){  
    this.score++;
}

const chai=createUser("chai",25) // in this sceranio createUser will increment both const chai and const tea in order to prevent it we need to use this
const tea=createUser("tea",200);  // this ==jisne bhi bhulaya / the one who call




createUser.prototype.printMe=function(){
    console.log(`Score is : ${this.score}`);
}

const userOne=new User("AKshay",12,true)  //we need to give new keyword otherwise in this case userTwo will override the value of userOne
const userTwo= User("Ghatge",11,true)   //New keyword is use when we have multiple instance of the calling the same function it will throw without new because it does not know the context 

chai.printMe();
//



//new keyword: when we use new keyword an empty object is created callled as instance and 
//constructor function start because of new keyword
//this keyword injects
//retrieve the value


//constructor provide us new instance each time

//console.log(userOne);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/