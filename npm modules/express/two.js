import express from 'express'
import morgan from 'morgan';
let app=express();
app.use(morgan('dev'))
app.get('/',(req,resp)=>{
    resp.send("Hello World")
});
app.get('/contact',(req,resp)=>{
    resp.send("contact page")
});
app.get('/employee',(req,resp)=>{
    resp.send("employee page")
});
app.listen('9000','127.0.0.1',(err)=>{
    if(err) throw err
});