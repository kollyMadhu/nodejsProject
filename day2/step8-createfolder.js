var fs= require("fs");
/*fs.mkdir("temp",function(){
    console.log("directory is created");
    fs.writeFile("temp/temp.txt","welcome");
    fs.exists("temp/temp.txt",function(){
        console.log("file and file folder");
        fs.appendFile("temp/temp.txt","even while");
        console.log("changed");
    })
});
*/
fs.mkdir("temp",function(){
    console.log("directory is created")
    console.log("current dir is" , process.cwd());
    process.chdir("temp");
    console.log("current dir is" , process.cwd());
     process.chdir("../");
    console.log("current dir is" , process.cwd());
    fs.rmdir("temp",function(){
      console.log("tempory dir removered");  
    })

});