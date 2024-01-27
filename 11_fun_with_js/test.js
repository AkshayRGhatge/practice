const myArr = []
%DebugPrint(myArr);

// NOte
/*
two type of array:
1. Continious ,
2. Holey
 
these array optimize
1. SMI(small integer)
2. Packed Element
3. Double(Float , string, function)

Inside array we do have array elements
if the array element and want to loop the element using for each and element do have string type then we do have different optimize compared to number 
*/

const arrTwo=[1,2,3,4,5]  // this array is PACKED_SMI_ELEMENTS ,BEST TYPE OF ARRAY we can have only int

arrTwo.push(6.0)  // then it becomes PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')  //Packed ELement , it do have different optimize

arrTwo[10]=11  //Holey_elements because of different type of elements

// if you are trying to access the element which is not present then it gives undefined and it is costly optimize


//NOte Once the array convert it into packed_double_element it cannot become the pakced_smi_element even though you delete the decimal
console.log(arrTwo);
console.log(arrTwo.length);  
console.log(arrTwo[9])  //undefined

//Following need to check as optimize step if it is holey
//bound check
//hasownproperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)
 

//Recommmend to have packed element no holey for better optimize

const arrTHREE=[1,2,,4,5]  // this array is hOLEY'


//Optimize follow as in continuous
// SMI > DOuble>Packed

//Optimize follow as in holey
//H_SMI > H_DOBULE > H_packed


const arrFour = new Array(3)   //just 3 holes . holey_smi_element

arrFour[0]='1'  //holey_elements
arrFour[1]='2'  //holey_elements
arrFour[2]='3'  //holey_elements

const arrFive=[];    //better approach then above when it comes to optimize 
arrFive.push('1'); //packed_element
arrFive.push('2'); //packed_element
arrFive.push('3'); //packed_element


const arrSix=[1,2,3,4,5];

arrSix.push(Infinity) // packed_double


//for, for-of, forEach  recommend method because of optimize

