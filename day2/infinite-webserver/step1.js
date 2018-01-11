var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
 fs.readFile("./"+req.url,function(error,data){
     if(data){
         res.writeHead(200,{"content-type":"text/html"});
         var pdata= data.toString();
         res.end();
     }else{
        res.write("request page not present");
         res.end();  
     }
 })
});

server.listen(2020,"localhost",function(error){
    console.log("server running");
})