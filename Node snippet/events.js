const events = require('events');

// one tunnel // connection
const eventemitter =  new events.EventEmitter();

// create custom event
eventemitter.on('newmessage', ()=>{
    console.log("New Message")
})

module.exports.eventemitter = eventemitter


