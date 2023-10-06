const fs=require('fs')
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    let emp=JSON.parse(data)
    for(value of emp){
        console.log(value.ename)
    }
})
