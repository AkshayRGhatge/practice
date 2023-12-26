const marvel_heros=["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

//Push: push combine two arrays into single array but structure seems to be array with in arrays
//concat : it concat two arrays into third arrays
//spread: same like concat easy to do 
//flat: array with in array need to separate into individual element

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const allHeros=[...marvel_heros,...dc_heros]

// console.log(allHeros)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArray=anotherArray.flat(Infinity)

// console.log(real_anotherArray);


console.log(Array.isArray("Akshay"))

console.log(Array.from("Akshay"))// op :- ['A','K','S','H','A','Y']