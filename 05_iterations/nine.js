//Reduce method

const myNums=[1,2,3];

const sumTotal=myNums.reduce( function( acc,currVal){

    console.log(`acc: ${acc} and curValu: ${currVal}`);
    return acc+ currVal;
}, 0)
//where 0 is accumulator so 0+1+2+3
//console.log(sumTotal);

const total=myNums.reduce(  (acc,cur)=> (acc+cur),0 )
console.log(total);


const shoppingCart=[
    {
            itemName:"js",
            course:2000
    },
    {
        itemName:"Data scient",
        course:1299
},{
    itemName:"java",
    course:5000
},{
    itemName:"Mobile",
    course:9000
},{
    itemName:"C",
    course:599
}
]

const Total=shoppingCart.reduce((acc,item) =>   (acc+item.course),0 )
console.log(Total)