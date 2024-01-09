const myobj={
    js:'javascript',
    cpp:'c++',
    rb: 'ruby',
    swift :'swift by apple'
}
//for in loop to print object

for (const key in myobj) {
   //console.log(key)   //print key
  // console.log(`${key} shortcut is for ${myobj[key]}`);    //js shortcut is for javascript  cpp shortcut is for c++ ....
   
}

//for in loop to print array
const programming=["js","java","ruby"]

for (const key in programming) {
  //  console.log(key);    // print keys
   // console.log(programming[key])   //print value
}




const map =new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('AU',"Australia")
map.set('IN',"India")

for(const key in map){
    console.log(key);
}