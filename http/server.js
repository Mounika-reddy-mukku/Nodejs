const http=require('http')
var server=http.createServer((req,resp)=>{
    resp.end('Hello Good morning');

});
server.listen(5500,888,(err,data)=>{
    if(err) throw err
    console.log("Server created successfully......")
});