
const promiseOne  = new Promise (function(resolve,reject){
    //Do any async task
    //DB calls, cryptography , networking
    setTimeout( function(){
        console.log("Async task is complete")
        resolve();// this will trigger the promise.then()     // resolve get connected to then 
    },1000)
    
    })
    
    //consumption
    //then is connected to resolve
    promiseOne.then(function(){
        console.log("Promise consumed")
    })
    
    
    new Promise(function(resolve,reject){
    
        setTimeout(function(){
            console.log("Async task without the variable declaration");
        },1000)
        resolve()
    })
    
    .then(function(){
        console.log("Promise without the variable consumed");
    })
    const promiseThree=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Async promise three");
        resolve({username:"Akshay", email:"akshayghatge6011@gmail.com"})
        },1000)
    })
    
    
    promiseThree.then(function(user){
    console.log(user.username, user.email);
    })
    
    
    const promiseFour=new Promise(function(resolve,reject){
    
        setTimeout(function(){
            console.log("Akshay in promise 4")
            let error=true;
            if(error){
                resolve({username:"Akshay", email:"akshayghatge6011@gmail.com"})
            }else{
                reject("Something went wrong: Error");
            }
        },1000)
    })
    
    promiseFour.then(function(user){
        return user.username;
    
    }).then(function(username){
        console.log(username);
    }).catch(function(err){
        console.log(err);
    }).finally(()=> console.log("The promise is either resolved or rejected"))
    
    const promiseFive=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Akshay in promise 5")
            let error=true;
            if(!error){
                resolve({username:"javascript", password:"12345"})
            }else{
                reject("error js is failed"); 
            }
        },1000)
    })
    
    //async is like it will wait and throws an error right away, does not gracefully handle error but it is need sometimes 
    //usecase is database connection need to wait unless the db is connected
    async function consumePromiseFive(){
     try{
        const response=await promiseFive;
        console.log(response);
    
    }
    catch(error){
        console.log(error)
    }
    }
    consumePromiseFive()
    
//consumption
//then is connected to resolve
promiseOne.then(function(){
    console.log("Promise consumed")
})


async function getAllUser(){
    try {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response);
     const data=await response.json();//converting the response which is string into json  
    console.log(data);
    }
    catch(e){
        console.log("E: " , e)
    }
}
// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data);
}).catch((error)=>{
    console.log(error)
})