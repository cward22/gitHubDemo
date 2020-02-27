const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('Hola world!');
        res.end();
    }
});


// server.on('connection', socket => {
//     console.log("connected");
// });

server.listen(8080);
console.log("server is on");