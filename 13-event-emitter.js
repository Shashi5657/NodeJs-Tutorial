const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response' , (name, id)=> {
    console.log(`data recieved with user ${name} & ${id} `)
})
customEmitter.on('response' , ()=> {
    console.log(`some other data `)
})

customEmitter.emit('response' , 'virat', 18)
