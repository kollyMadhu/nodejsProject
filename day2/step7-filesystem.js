var fs= require("fs");
fs.mkdir("temp",function(){
    console.log("directory is created");
});

setTimeout(function(){
    fs.rmdirSync("temp");
    console.log("derectory removerd");
})