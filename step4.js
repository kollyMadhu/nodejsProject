var EventEmitter= require("events").EventEmitter;
var ee =new EventEmitter();
ee.addListener("infinite",function(){
    console.log("infinite event happened");
});

var si = setInterval(function(){
    ee.emit("infinite");
    clearInterval(si);
},2000)

