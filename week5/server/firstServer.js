const http = require('http');
const greeting = "Hello, World!"

//create a server object
const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write(`<h1>${greeting}</h1>`);
        res.end(); // ends the respone
    }

    if (req.url === '/songs') {
        res.write(JSON.stringify(["Remember", "We Dance", "Evergreen"]));
        res.end();
    }
});

// server.on('connection', socket => {
//     console.log("connected");
// });

//the server obeject is listening on port 8080
server.listen(8080);
console.log("server is on");