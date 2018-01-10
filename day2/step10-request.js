var request = require("request");
var fs= require("fs");
var gzip = require("zlib");
//var req = request("http://technicaltrainings.com").pipe(fs.createWriteStream("vijaypage.html"));

var req =  request("http://technicaltrainings.com",function(error,res){
    console.log(error,res);
})
.pipe(gzip.createGzip())
.pipe(fs.createWriteStream("webpage.html.gz"));

req.on("finish",function(){
    console.log("file created");
})