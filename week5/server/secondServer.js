const http = require('http');
const greeting = "Hola, World!";
const heading = "About Me Page";

//create a server object
const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write(`<h1>${greeting}</h1>`);
        res.end(); // ends the respone
    }

// Make it a web server so that when a browser navigates to "localhost:8080/about" you server a html web page.

    if (req.url === '/about') {
        res.write(heading);
        res.end(); // ends the respone
    }
});

//the server obeject is listening on port 8080
server.listen(8080);
console.log("server is on");