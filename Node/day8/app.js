const http = require("http");
const os=require('os');
const server = http.createServer((req, res) => {
    const requestUrl = req.url;
    console.log("request ru ", requestUrl);
    const requestMethod = req.method;
    console.log("res method ", requestMethod);
    //Check if log.txt is available 
    if (requestUrl === "/home") {
        res.end("hello World------homr -----");
    }

    //manual route handling
    if (requestUrl === "/user") {
        res.end("User PAge")
    }

    if(requestUrl==='/systemconfig'){
        const freememory=`Free ram :&{os.freemem() /1024 /1024 1024}`
        res.end(freememory);
    }
    res.end("hello World-----------");

});


//port numbre ,IP         multiple usb port application access 

server.listen(3000);