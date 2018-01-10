var http = require("http");


var port = 1234;
var host = "localhost";

var server = http.createServer(function(req,res){
res.write("<h1>hello</h1>");
res.end();
});

server.listen(port,host,function(error){
    if(error){
        console.log(error);
    }else{
        console.log("server created");
    }
})