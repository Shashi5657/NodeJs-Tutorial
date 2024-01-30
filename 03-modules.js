// NodeJs uses commonjs.... In common js every file is a module by default
// modules are encapsulated code (only share minimum)

// imported names from names.js 
const names = require('./04-names')
//imported function named sayHi from utils
const sayHi = require('./05-utils')
//imported various data from alternative-flavor using alternative syntax
const data = require('./06-alternative-flavor')
console.log(data)

sayHi('shiva');
sayHi(names.shashi);
sayHi(names.jagad)


// here we r not importing, but we invoked the function, it is just executed , but not imported here
require('./07-mind-grenade')