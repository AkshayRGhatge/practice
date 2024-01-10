const coding =["js","java","ruby","c"]


//Note we cannot store value in variable for the foreach

// const values=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values)

const myNums =[1,2,3,4,5,6,7,8,9,10]

//--------FIlter-------------------

// to return a value

const num=myNums.filter((num)=>num>4)    // filter and condition
//console.log(num)                //op:- [ 5, 6, 7, 8, 9, 10 ]

//const num=myNums.filter((num)=>{num>4})   
//console.log(num)     //op:- []    because the bracket we need to use return keyword  

const newNums=[];

myNums.forEach((item)=>{

    if(item>4)
    {
        newNums.push(item);
    }

});

//console.log(newNums)


const books=[{
    title: "Book1 ",
    genre: 'fiction',
    publish: 1980,
    edition: 1996
},
{
    title: "Book2 ",
    genre: 'non fiction',
    publish: 2000,
    edition: 2001
},
{
    title: "Book3",
    genre: 'Horror',
    publish: 2005,
    edition: 2006
},
{
    title: "Book4",
    genre: 'comedy',
    publish: 2010,
    edition: 2011
},
{
    title: "Book5",
    genre: 'history',
    publish: 2020,
    edition: 2021
},

]

const userBooks=books.filter( (bk)=> bk.title==="Book4" )
//console.log(userBooks)

const userBooksTest=books.filter( (bk)=> (bk.publish > 2005 && bk.edition===2021) )
console.log(userBooksTest)