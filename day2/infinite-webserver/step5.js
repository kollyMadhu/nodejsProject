const express = require("express");
const fs = require("fs");
const bp = require("body-parser");

let app = express();

var data = fs.readFileSync("./data/data.json");
    data = JSON.parse(data);


app.use(bp.urlencoded());

app.get("/", function(req, res){
    res.render("index.pug",{
        message : "Welcome to Infinite Application",
        herodata : data.heroes
    });
});

app.post("/", function(req, res){
    console.log(req.body);
    data.heroes.push(req.body);
    fs.writeFile("./data.json",JSON.stringify(data), function(error, data){
        console.log("hero added")
    });
    
});

app.listen(2006);
console.log("your server is now running on localhost:2006");