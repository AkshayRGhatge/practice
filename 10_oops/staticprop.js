class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  //usecase sometimes we don't need to provide the access to all the function/user
        return `123`
    }

}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;

}

}


const akshay=new User("Akshay") 
const idcreated=akshay.createId();
console.log(idcreated);

const test= new Teacher("akshay","a@gmail.com");

console.log(test.createId());