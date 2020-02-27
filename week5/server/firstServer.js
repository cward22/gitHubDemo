const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('Hola, World!');
        res.end();
    }

    if (req.url === '/songs') {
        res.write(JSON.stringify(["Remember", "We Dance", "Evergreen"]));
        res.end();
    }
});

// server.on('connection', socket => {
//     console.log("connected");
// });

server.listen(8080);
console.log("server is on");