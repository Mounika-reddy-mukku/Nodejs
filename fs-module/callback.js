let sum=(a,b)=>{
    return a+b;
}
let multi=(a,b)=>{
    return a*b;
}
let div=(a,b)=>{
    return a/b
}
let calc=(a,b,callback)=>{
    return callback(a,b)
}
let r1=calc(10,20,sum);
console.log(r1)
let r2=calc(2,10,multi);
console.log(r2);
let r3=calc(10,5,div);
console.log(r3)