//Object singleton

//const tinderUser=new Object() // single ton object

const tinderUser={} //non singleton object

 tinderUser.id="123abc"
 tinderUser.name="AKki"
 tinderUser.isLoggedIn= false
//  console.log(tinderUser);


//Object within object
const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            fname:"Akshay",
            lname:"Ghatge",
        }
    }
}

//console.log(regularUser.fullname.userfullname.fname); // Akshay

//option chaining using ? helpful if the object does not find 
// console.log(regularUser.fullname?.userfullname.fname);

// where 1 is a key and "a" is  a value
const obj1={
    1: "a",
    2:"b"
}

const obj2={
    3: "a",
    4:"b"
}

const obj3={
    5: "a",
    6:"b"
}


const obj4={obj1,obj2};
//console.log(obj4)   // bad practise // op: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj5=Object.assign({},obj1,obj2) // where bracket are optional parameter act as target and other objects are source
//console.log(obj5)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6={...obj1,...obj2} // spread operator 
// console.log(obj6) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Array contain object

const user=[
    {
        id:1,
        email:"a1@gmail.com",
    },
    {
        id:2,
        email:"a2@gmail.com"
    }
]

//console.log(user[0].email) //a1@gmail.com

console.log(tinderUser)

//In order to find key
//console.log(Object.keys(tinderUser))

//In order to find the value
//console.log(Object.values(tinderUser))


// Entries first make it into array
//console.log(Object.entries(tinderUser))  // [ [ 'id', '123abc' ], [ 'name', 'AKki' ], [ 'isLoggedIn', false ] ]

// To check tjhe id exist in the object
//console.log(tinderUser.hasOwnProperty('id'))



// Destructure

const course={
    coursename :"javascript",
    price: "999",
    instructor:"AG"
}

//console.log(course.instructor); // one way to get an value

const {coursename:instructor}=course;  //objects destructuring where coursename is an key and colon and instructor is an alias

console.log(instructor);


// API concept overview
// api receive in json structure 
// {
//     "name":"Akshay",
//     "course":"javascript",
//     "price": "free"
// }

// some api receive in array format
// [
//     {},
//     {},
//     {},
// ]