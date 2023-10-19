import express from 'express'
import morgan from 'morgan'
import fs from 'fs'
import dotenv from 'dotenv'
const app=express();
dotenv.config({path:'config.env'})
var port=process.env.PORT
var host=process.env.HOST
app.use(express.json())
app.get('/',(req,resp)=>{
    resp.send({'msg':'Root request'})
})
//get all emp data
app.get('/all',(req,resp)=>{
    const Empdata=getEmpData()
    resp.send(Empdata)
})
app.post('/emp/add',(req,resp)=>{
    let emp_obj=req.body //req in postman body 
    console.log(emp_obj)

    let employees=getEmpData();
    console.log(employees)
    //check if the new employ data is exist or not
    let exist=employees.find((emp)=>emp.name==emp_obj.name);
    console.log(exist)
    if(exist){
        resp.send("employee data already existed")
    }
    else{
        employees.push(emp_obj)
        //write the new employee data in json file
        saveEmpData(employees) //create a function
        resp.send("Employee data inserted successfully")
    }

})
app.delete('/emp/delete/:name',(req,resp)=>{
    let name=req.params.name
    console.log(name)
    let employees=getEmpData()
    //filtering the employess 
    let new_employees= employees.filter(emp=>emp.name!=name)
    console.log(new_employees)
    saveEmpData(new_employees)
    resp.send("Deleted successfully")
})
//Saving the data
function saveEmpData(employees){
    fs.writeFileSync('data.json',JSON.stringify(employees))
}
//getting employee data function
function getEmpData(){
    let emp=fs.readFileSync('data.json','utf-8')
    return JSON.parse(emp)
}
app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running on http://${host}:${port}`)
})


