const path=require('path')
const fs=require('fs')
console.log(path.join(__dirname))
Filename=path.join(__filename,"emp.json")
fs.readFile('Filename','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)

})