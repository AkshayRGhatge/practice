//for each loop

const coding =["js","java","ruby","c"]

 
// coding.forEach( function (val) {
//     console.log(val)
// } ) 


// coding.forEach((val)=> {
//     console.log(val)
// } ) 

// function printMe(item){
//    console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
  //  console.log(item,index,arr);

})




const myCoding=[


    {
        language:"java",
        alias: "j",
    },
   
    {
        language:"Cpp",
        alias: "C",
    },
    
    {
        language:"javascript",
        alias: "js",
    },
]

myCoding.forEach((item)=>{

    console.log(item.language)

})