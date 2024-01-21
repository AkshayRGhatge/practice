const user={
    username: "Akshay",
    loginCount:8,
    signIN:true,

    getUserDetails: function(){
        //console.log("Got User details from db");
        //console.log(`Username: ${this.username}`);
        // console.log(this)
    }

}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount){
    this.username=username;  //where this.username left side is a variable and username right side is a parameter
    this.loginCount=loginCount;

   // return this;//will pass the variable
}

const userOne=new User("AKshay",12,true)  //we need to give new keyword otherwise in this case userTwo will override the value of userOne
const userTwo=new User("Ghatge",11,true)

//new keyword: when we use new keyword an empty object is created callled as instance and 
//constructor function start because of new keyword
//this keyword injects
//retrieve the value


//constructor provide us new instance each time

//console.log(userOne);

