const express=require('express')
const morgan=require('morgan')
const cors=require('cors')
const dotenv =require('dotenv')
const mongoose=require('mongoose')

//create app
 let app=express()
 //loading env variables
 dotenv.config({path:'./config.env'})
 const port=process.env.PORT
 const host=process.env.HOST 
 const mongo_url=process.env.MANGO_DB_LOCAL_URL
 app.get('/',(req,resp)=>{
    resp.send("<h1>Hello Evryone</h1>")
 })
 //connect to mongodp
 mongoose.connect(mongo_url).then(()=>{
        console.log("connection successefull")
    }).catch(()=>{})

 app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server running on http:${host}:${port}`)
 })