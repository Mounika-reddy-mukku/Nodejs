const fs=require('fs')
let emp={
    "eId":101,
    "eName":"Rahul",
    "eGender":"Male",
    "eLoc":["Wayanad","New Delhi","Bangalore"]

}
fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    fs.writeFile('empty.json',JSON.stringify(data),(err)=>{
        if(err) throw err
        console.log("Sucess....")
})
})
