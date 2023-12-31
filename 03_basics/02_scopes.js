//within bracket block scope value should be inside bracket 
//global scope var

//scope is different in node and dom
if(true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){

    const userName="Akshay";

    function two(){
        const website="youtube";
        console.log(userName);
    }
    // console.log(website);
    two();
}
//one();

// if(true)
// {
   
//     const userName="AKshay";
//     if(true){
//         const website=" youtube";
//         console.log(userName+website);
//     }
//     //console.log(website);
//     //console.log(userName);
    
// }

//-------------------Interesting----------------------------

//when you decalare the variable and value is function the function should be call before declaration


console.log(addone(5)); //give 6
function addone(num){
return num +1;
}

addTwo(5) //throws error because the function is stored in the variable and we are calling it before declaration
const addTwo=function(num){
    return num +2;
}





