const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descriptor);

const chai={
    name:'ginger chai',
    price:250,
    isavailable:true,

    orderchai: function(){
        console.log("Code is here");
    }
}

//console.log(chai)


console.log(Object.getOwnPropertyDescriptor(chai)) //undefined because the object does not have property
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// Object.defineProperty(chai,"name",{   // 3 paramertes object, key, config that need to update  //defineProperty for one key, defineProperties for multiple
//     writable:false,
//     enumerable:false,
// })
//console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(let [key,value] of Object.entries(chai)) //to iterate the object
{
    //if the object do have a function stored in an key then we need to check it otherwise the log will print the function as well
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)
    }  
}

//Now want to config that name in the object does not loop
 Object.defineProperty(chai,"name",{   // 3 paramertes object, key, config that need to update  //defineProperty for one key, defineProperties for multiple
   
   enumerable:false,
 })
 for(let [key,value] of Object.entries(chai)) //to iterate the object
{
    //if the object do have a function stored in an key then we need to check it otherwise the log will print the function as well
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`)// this won't print the name key 
    }  
}
