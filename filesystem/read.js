//using synchrounous 
const fs=require('fs')
let data=fs.readFileSync('data.txt','utf-8');
console.log(data)

//using asynchrounous

let data1=fs.readFile('data.txt','utf-8',(err,data1)=>{
    if(err) throw err
    console.log(data1)
})