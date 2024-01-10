//Map

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNumbers.map((num)=> num+10)
//console.log(newNums)

//chaining meaning using map and filter etc

const newNumbers= myNumbers
            .map((no)=> no *10)
            .map((no)=>no / 10)
            .filter((no)=> no>4);

console.log(newNumbers)


