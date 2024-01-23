// let name="Akshay    ";
// console.log(name.length());

// we need to use trueLength() method dont want to use trim to remove the space

const hero=["SpiderMan","Thor"];

let heroPower={
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)//need to use this keyword to retieve the spider man value
    }
}

//let's inject the new function in the existing object hero
// so let access the top level heirarcy for instance object and put the function in it

Object.prototype.Akshay=function() {
    console.log("Akshay is here"); 
}


//Array inject function
Array.prototype.heyAkshay=function() {
    console.log("hey Akshay is here"); 
}


hero.Akshay();  //Akshay is here
hero.heyAkshay();  //Hey akshay is here
// heroPower.heyAkshay();  //throw errow


//inheritance


const User={
    name:"AKshay",
    email:"akshay@gmail.com"
}
const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS',
    fullTime:true,
    __proto__: teachingSupport // to borrow the teachingSUpport properties
}

teacher.__proto__=User  // to borrow the properties of the user

//Modern approach/syntax

Object.setPrototypeOf(teachingSupport,teacher);// where teachingSupport takes the properties of teacher



let anotherUserName="Akshay Ghatge    "  // declared anotherUserName

String.prototype.trueLength=function(){   //inject function in string
    console.log(`${this}`);  //op: Akshay Ghatge    with space
    console.log(`True length is: ${this.trim().length}`);
}  
anotherUserName.trueLength();  //get access 