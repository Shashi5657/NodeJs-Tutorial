const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//this method returns the system uptime in seconds
console.log(`the systems uptime is ${os.uptime()} seconds`)


const time = os.uptime 
const hours = (time / 60) / 60 ;
console.log(`the systems uptime is ${hours} hours`)

const currentOs = {
    name : os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs)