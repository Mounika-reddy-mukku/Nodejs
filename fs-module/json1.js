const fs=require('fs')
data=fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    console.log(typeof data)
    let data1=JSON.parse(data)
    console.log(data1)
    console.log(typeof data1)
})