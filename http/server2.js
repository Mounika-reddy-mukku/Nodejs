const http=require('http')
const fs=require('fs')
const path=require('path')
const { CLIENT_RENEG_LIMIT } = require('tls')
let server=http.createServer((req,resp)=>{
    if(req.url ==="/index.html"){
        fs.readFile(path.join(__dirname,"web","index.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
    })
    }
    if(req.url ==="/about.html"){
        fs.readFile(path.join(__dirname,"web","about.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
    })
    }
    else{
        fs.readFile(path.join(__dirname,"web","contact.html"),'utf-8',(err,data)=>{
            if(err) throw err
            resp.end(data)
    })
    }
})
server.listen(8080,8888,(err)=>{
    if(err) throw err
    console.log("Server Running successfully")
})