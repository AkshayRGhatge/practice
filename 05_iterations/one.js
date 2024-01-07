//for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
       // console.log("5 is the number")

    }
  //  console.log(element);
    
}


for (let i = 0; i < 10; i++) {

    //console.log(`Outer loop:  ${i}`);
  for (let j = 0; j < 10; j++) {
   // console.log(`Inner loop value ${j} and outer loop: ${i}`);
   // console.log(`${i} * ${j} = ${j*i}`)
    
  }
    
}


//break and continue

for (let index = 1; index <=20; index++) {
   
    if(index==5)
    {
        console.log(`Detected 5`)
        break; //if break then it will break the loop 
    }
    console.log(`Value of i is ${index}`)

    
}
for (let index = 1; index <=20; index++) {
   
    if(index==5)
    {
        console.log(`Detected 5`)
        continue; //if break then it will skip or ignore the loop 
    }
    console.log(`Value of i is ${index}`)

    
}

