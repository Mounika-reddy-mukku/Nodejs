import express from 'express'
let app=express()
app.listen('8080','127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Server running http://127.0.0.1:${8080}`)
})