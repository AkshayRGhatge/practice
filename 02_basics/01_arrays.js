// array

//Array can have different data type
//Array cpy operation is shallow copy meaning call by reference
const myArr = [0,1,2,3,4,5, true, "Akshay"]
// console.log(myArr[0]) //in order to access the element

// myArr[0]="Test";

// console.log(myArr[0]);
// myArr.forEach((element) => {
//     console.log(element)
// }
// );
const myArr2=new Array(1,2,3,4)
// console.log(myArr2[1]);

// Arrays methods
//push: to add element in array
//pop: to remove the last element
//unshit: to add the element in the first position
//shift: like a pop remove the first element
//includes: to see if the element is exist in the given array or not return boolean
//index: need to pass the parameter that checks if the character exist in the array then it of return the index of the array in the list 
//if -1 does not exist in the list 
//join(): it copies the array element in the variable of data type  string
//slice: does not manipulate the orignal value for instance array with paramater(1,3) it will print the array position 1 and 2 only.
//splice: manipulate the original array if two parameters(1,3) it will take the index position from 1 till 3 and remove it from the original array 


// myArr2.push(5)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()

// console.log(myArr2.includes(1));
// console.log(myArr2.indexOf(9))



// const newArr=myArr2.join();

//  console.log(myArr2)
//  console.log(newArr)

// console.log("A" , myArr2);

// const myn1 = myArr2.slice(1,3)

// console.log(myn1);

// console.log("B" , myArr2);


// const myn2 = myArr2.splice(1,3)

// console.log("C" , myArr2);
// console.log(myn2);




const testArray = new Array (0,1,2,3,4,5)
console.log("A  ",testArray);

console.log(testArray.slice(1,3));
console.log("B " ,testArray);

console.log(testArray.splice(1,3));
console.log("C ", testArray)