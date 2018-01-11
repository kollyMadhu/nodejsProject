const express =require("express");
let app= express();

let data ={
"heroes":[
{"fn" : "madhu" ,"ln" : "kumi " , "city" : "balore" ,"power":8},
{"fn" : "madh" ,"ln" : "ku" , "city" : "bangare" ,"power":6},
{"fn" : "ma" ,"ln" : "kuari " , "city" : "bangalore" ,"power":7},
{"fn" : "m" ,"ln" : "kuri " , "city" : "banre" ,"power":9},,
{"fn" : "d" ,"ln" : "kumai " , "city" : "alore" ,"power":1},
{"fn" : "ma" ,"ln" : "kuri " , "city" : "bange" ,"power":3}

]

}


app.get("/",function(req,res){
   res.send("Home");
})
app.get("/data",function(req,res){
    res.send(data.heroes);
})
app.get("/about",function(req,res){
    res.send("about");
})
app.get("/product/?:prod",function(req,res){
var param = req.params.prod;
     res.send(`<h1>product is ${ param } in bangalore </h1>`);
})
app.get("*",function(req,res){
     res.send("not found");
})
app.listen(4040,"localhost",function(error){
    if(error){
        console.log(error)
    }else{
        console.log("server is running in 3030 port");
    }
})