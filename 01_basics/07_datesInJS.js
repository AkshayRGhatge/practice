//Dates

//

let myDate =new Date();
// console.log(myDate); //2023-12-20T01:50:00.352Z
// console.log(myDate.toString());// Wed Dec 20 2023 01:50:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Wed Dec 20 2023
// console.log(myDate.toLocaleDateString()); //12/20/2023
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 0,23)  //month starts from 0
// let myCreatedDate = new Date(2023, 0,23,5,3)  //
// let myCreatedDate = new Date("2023-01-14")  
let myCreatedDate = new Date("01-14-2023")  
// console.log(myCreatedDate.toLocaleString())   //Mon Jan 23 2023



let timeStamp =Date.now()
// console.log(typeof timeStamp)//number
// console.log(timeStamp)//1703037618381

//console.log(Math.floor(Date.now()/1000))//Purpose of doing Math.floor is to get rid of decimal point o/[:- 1703037821]

let newDate=new Date();
console.log(newDate)
console.log(newDate.getMonth()+1)// the purpoe of adding +1 is because the month starts from 0
console.log(newDate.getDay())

//`${newDate.getDay} this is date`

newDate.toLocaleString('default',{
    weekday: "long",
})
