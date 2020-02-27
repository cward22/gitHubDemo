const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('create file', () => {
    console.log("file was created");
    });

myEmitter.emit('create file');