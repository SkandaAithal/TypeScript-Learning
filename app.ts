type Combine = number | string;
function add(a:Combine,b:number):Combine{ 
    if(typeof a==='number'){
        return a+b;

    }else{
        return a+b.toString()
    }
}
console.log(add("2",14));
let alias:(a:Combine,b:number)=>Combine;
alias=add
const objtype:{
num1:number,
color:string
}={
    num1:12,
    color:"red"
}
console.log(objtype.num1);
let abc:object[];
abc=[{a:1},{b:"2"}]
console.log(abc)
enum Direction {
    UP=1 ,DOWN,RIGHT,LEFT
}


const where:Direction=Direction.LEFT;
console.log(where)
console.log(alias(2,0))

function sendrequest(data:string,cb:(res:any)=>void){
    return cb({data:"hi"});

}

console.log(sendrequest("hello",(respo)=>{
    console.log(respo)
    return true
}))