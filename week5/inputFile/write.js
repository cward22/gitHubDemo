const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('write to file', () => {
    console.log("file was written to");
    });

myEmitter.emit('write to file');