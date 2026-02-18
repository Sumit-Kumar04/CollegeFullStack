const http = require("http");
const server = http.createServer((req, res) => {
    const requestUrl = req.url;
    console.log("request ru ", requestUrl);
    const requestMethod = req.method;
    console.log("res method ", requestMethod);
    if (requestUrl === "/home") {
        res.end("hello World------homr -----");
    }

    //manual route handling
    if (requestUrl === "/user") {
        res.end("User PAge")
    }
    res.end("hello World-----------");



});


//port numbre ,IP         multiple usb port application access 

server.listen(3000);