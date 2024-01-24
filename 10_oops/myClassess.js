// class User{
//     constructor(username, password,email){
//         this.username=username;
//         this.password=password;
//         this.email=email;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }

// }

// const chai= new User("akshay","test@","a@mail.com");
// console.log(chai);

// console.log(chai.encryptPassword())
// console.log(chai.changeUsername())

//behind the scene without the class

function User(username, password,email){
    this.username=username;
    this.password=password;
    this.email=email;

}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`;
}

const tea= new User("akshay","test@","a@mail.com");
console.log(tea);

console.log(tea.encryptPassword())
console.log(tea.changeUsername())