const http=require('http')
var server=http.createServer((req,resp)=>{
    resp.end("Good morning")
});
server.listen(808,888,(err,data)=>{
    if(err) throw err
    console.log("Server created successfully......")
});