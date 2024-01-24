function setUsername(username){

    //complex DB call
    this.username=username;
    console.log("set Username function called");
    
}

function createUser(username,email,password){
   // setUsername(username);// this will call the setUsername but as soon as the method is called the reference of the variable is gone in the call stack because the execution context is gone
     setUsername.call(this,username); // need to give this as reference with the .call because the renference of this in setUsername finction will be gone as it get execute so we need to pass this reference with .call so it can holds the reference of this of setUsername even though the execution context is gone
    this.email=email;
    this.password=password;
}

const user=new createUser("Akshay","akshay@gmail.com",123)
console.log(user);