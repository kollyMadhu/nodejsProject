var EventEmitter= require("events").EventEmitter;
var ee =new EventEmitter();
var si;
var count = 1;
process.nextTick(function(){
  si = setInterval(function(){
ee.emit("infinite" , " my secret info ");
count++;
if(count>5){
    clearInterval(si)
};
   },2000);   
});
ee.addListener("infinite",function(message){
    console.log("infinite event sent me "+message );
});

 
   