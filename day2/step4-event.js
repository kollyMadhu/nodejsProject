var EventEmitter= require("events").EventEmitter;
var ee =new EventEmitter();
ee.addListener("infinite",function(message){
    console.log("infinite event sent me "+message );
});

var si = setInterval(function(){
    ee.emit("infinite" , "my secret");
    clearInterval(si);
},2000)