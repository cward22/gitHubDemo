// var fs = require('fs');

// var readStream =
// fs.createReadStream

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('read file', () => {
    console.log("file has been read");
    });

myEmitter.emit('read file');