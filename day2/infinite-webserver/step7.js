var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.locals.pretty = true;
app.use(bodyParser.urlencoded({ extended : true }));

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = mongoose.model("Users", new Schema({
    id : ObjectId,
    name : String,
    password : String,
    email : {type : String, unique : true}
}));

mongoose.connect("mongodb://localhost/infinite");



app.get("/", function(req, res){
    res.render("index.jade")
});

app.get("/login", function(req, res){
    res.render("login.jade")
});

app.get("/register", function(req, res){
    res.render("register.jade")
});
app.post("/register", function(req, res){
    var user = new User({
        name : req.body.name,
        password : req.body.password,
        email : req.body.email
    });

    user.save(function(error){
        if(error){
            if(err.code === 11000){
                console.log("email id exists");
            }
        }else{
           res.redirect("/report") 
        }
    })
});

app.get("/report", function(req, res){
    res.render("report.jade")
});

app.get("/logout", function(req, res){
    res.redirect("/");
});

app.listen(2007);
console.log("server is now running on localhost:2007");