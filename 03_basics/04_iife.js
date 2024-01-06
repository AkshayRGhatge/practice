//Immediately  Invoked Function Expression(IIFE)
//in order to access the function immediately like connection string 

//IN order to avoid global scope varialbe etc pollution
//need to use semi colon at the end because it does not know where to end so we need to add explicity semi colon
(function chai(){
    console.log("DB connected");
})();


//(Function definition)(execution)

//Name IIFE
( ()=>{
    console.log("Test");
})();


//unnmmed IFFE arrow function
( (name)=>{
    console.log(`${name}`);
})('Akshay');