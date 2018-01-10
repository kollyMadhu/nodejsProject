/*var fs = require("fs");
fs.readFile("data.json",function(err,data){//using like this if any problem in data.json file
    if(err){
        console.log(err)
    }else{
        console.log(JSON.parse(data).heros[0])
       // console.log(data.toString())
    }

})*/

var data = require("./data.json");
console.log(data.heros[1]);