

const arr=[1,2,3,4,5];

//for of loop
for (const val of arr) {
    //console.log(val);
}

const greeting="Hello world";
for (const iterator of greeting) {
   // console.log( iterator)
}

// Maps : does not have duplicate value and pre

const map =new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('AU',"Australia")
map.set('IN',"India")

//console.log(map)

for(const [key,value] of map){     //this is called destructure of the map as well as 
    //console.log(key, ":-",value); 
}
//op:- IN :- India US :- United States AU :- Australia

const myobj={
    game1: 'NFS',   // cannot use single quote 'game1' , 'game2' in the key when using key of
    game2:'SpiderMan'
}

// for(const [key,value] of myobj){    
//     console.log(key, ":-",value); 
// }

