const express = require("express");
let app = express();
// app.use(express.static(__dirname+"/public"));
let data = {
"heroes" : [
    { "fName" : "Bruce", "lName" : "Wayne",  "city" : "Gotham",     "power" : 6},          
    { "fName" : "Tony",  "lName" : "Stark",  "city" : "New York",   "power" : 5},          
    { "fName" : "Peter", "lName" : "Parker", "city" : "New York",   "power" : 7},          
    { "fName" : "Clark", "lName" : "Kent",   "city" : "Metropolis", "power" : 8},          
    { "fName" : "Kit",   "lName" : "Walker", "city" : "Bangala",    "power" : 6}      
    ]
};

app.get("/", (req,res) => res.sendFile(__dirname+"/public/app.html") );
app.get("/data", (req,res) => res.send(data) );
app.listen(2005);
console.log("your server is now running on localhost:2005");