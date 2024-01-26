class User{
    constructor(username,password){
        this.username=username;
        this.password=password

    }

    //By default get and setter initailize automatically
    //you need to implement both getter and setter together
    //you cannot set the value in the constructor and also setter 
    //getter and setter going to override the value of constructor 
    //getter and setter use to customize the value or more privacy setup
    //In order to set the value from outside the class getter is use
    //we need to use return in getter
    // _ define the private properties
    
    get password(){
        return this._password.toUpperCase();

    }
    set password(value){
        this._password=value;
    }
    get email(){
        return this._email.toUpperCase();

    }
    set email(value){
        this._email=value;
    }


}
const user=new User("agmailcom", "abc")
console.log(user.password)
console.log(user.email)