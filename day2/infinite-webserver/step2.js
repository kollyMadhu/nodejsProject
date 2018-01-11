const express =require("express");
let app= express();

app.get("/",function(req,res){
   res.sendFile(__dirname+"/public/index.html");
    //res.sendFile("/public/index.html",{root : __dirname});
   // res.sendFile(process.cwd()+"/public/index.html")
})

app.get("/superman",function(req,res){
    res.sendFile(__dirname+"/superman.html");
})

app.get("*",function(req,res){
    res.send("page requested not found");
})

app.listen(3030,"localhost",function(error){
    if(error){
        console.log(error)
    }else{
        console.log("server is running in 3030 port");
    }
})