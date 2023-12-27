
function sayMyName(){
console.log("A")
console.log("K")
console.log("S")
console.log("H")
console.log("A")
console.log("Y")
}
//sayMyName();  // function execution
//sayMyName; // References

// function addTwoNumber(number1,number2){

//     console.log( number1 + number2);
// }
// const result=addTwoNumber(3,4) 
// console.log("Result:", result);   //undefined

function addTwoNumber(number1,number2){

    //let result = number1+number2
    //return result;
    return number1+number2;
   
}
const result=addTwoNumber(3,4) 

//console.log("Result:", result);   //7


function loginUserName(userName ="Akshay"){        //parameter with the ="" value is a default value if no parameter is passed then print default value
if(userName === undefined)   // or if(!userName)
{ 
    console.log("Please enter user name!");
    return;
}

    return `${userName} just logged in.`
}

console.log(loginUserName("Akshay Ghatge")) // if you do not pass any argumment then it gives undefined 
