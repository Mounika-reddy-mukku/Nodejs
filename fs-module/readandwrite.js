//synchrounous
const fs=require('fs')
var data=fs.readFileSync('data.txt','utf-8')
fs.writeFileSync('empty.txt',data)
var data=fs.readFileSync('empty.txt','utf-8')
console.log(data)

//asynchrounous
var data=fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err) throw err
    fs.writeFile('empty1.txt',data,(err)=>{
    if(err) throw err
    console.log("Successfully writen the data in empt1 file")
})
})
