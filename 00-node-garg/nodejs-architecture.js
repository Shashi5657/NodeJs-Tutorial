// it works on event loops, we r clients, 
// we send requests to the servers
// two types of requests 
// blocking (synchronous)'
// non blocking (async) 
//for non sync the requests are passed on to thread pool, where by default 4 threads are available
//below we see examples

const fs = require('fs')


// console.log('1')
// fs.readFile('test.txt', 'utf-8', (err,result)=> {
//     if(err){
//         console.log(err, 'Error')
//     }else {
//         console.log(result)
//     }
// })

// console.log('2')
// console.log('3')

//this is the non blocking code
// (this is the result )
// 1
// 2
// 3
// Hello world.kya bolthe public...kya bolthe public...

// console.log('1')
// const result = fs.readFileSync('test.txt', 'utf-8' , (err)=> {})
// console.log(result)
// console.log('2')

// this is the result of blocking code
// 1
// Hello world.kya bolthe public...kya bolthe public...
// 2

//to find the max threads of your pc

const os = require('os')

const threads = os.cpus().length
console.log(threads)