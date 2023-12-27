
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

// Rest operator and spread operator syntax are same depends on the usage where it is called
// if one want to pass the parameters and not sure how many parameters are need then use rest operators


function calculateShoppingCart(val1,val2,...num1){
    return num1
}
// if you are passing have two arguments and one parameters in the function without rest operator it would consider only first parameters
console.log(calculateShoppingCart(200 ,300,400,500));  // print [400,500] because 200 and 300 are stored in val1 and val2


// how to handle and pass object in the function
// define object

const userObj={
    name:"AKshay",
    gender:"Male"
}

function handleObject(anyobject){

    console.log (`User name is  ${anyobject.name} and price is ${anyobject.gender}`);
}

handleObject(userObj)


handleObject ({
    name:"Test",
    gender : "f"
}
)


const myNewArray =[200,300,400,600]

function returnSecondValue(getArray){

    return getArray[1];
}

console.log("the second value of the array is", returnSecondValue(myNewArray));

console.log(returnSecondValue([100,500,200]))