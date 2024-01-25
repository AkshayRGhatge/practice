class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    
    }
}
class Teacher extends User{
        constructor(username,email,password){
            super(username)
            this.email=email;
        this.password=password;
      
       
    }

    addCourse(){
        console.log(`New course added by ${this.username}`);
    }
}

const username=new Teacher("Akshay","a@gmail.com","1223");
username.addCourse();


const user=new User("Akshay")
user.logMe();

