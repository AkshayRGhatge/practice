let name="Akshay"
let repCount=5
//console.log(name+repCount);

const nameTest=new String ('AKshay');
//console.log(nameTest[0])

// console.log(nameTest.__proto__);
//console.log(nameTest.length);
// console.log(nameTest.toUpperCase());
// console.log(nameTest.charAt(2));    //When we specify it starts with 0
// console.log(nameTest.indexOf('A'));

const newString=nameTest.substring(0,2);
//console.log(newString);

const anotherString =nameTest.slice(-6,2);
//console.log(anotherString);


const newStringOne="   Akshay   ";
// console.log(newStringOne)
// console.log(newStringOne.trim())


const url="akshay%20@gmail.com"
// console.log(url.replace('%20','-'))

// console.log(url.includes('@gmail.com'))

const testingArray="Akshay-Test-gmail-com";
console.log(testingArray.split('-'));