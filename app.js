// NodeJs uses commonjs.... In common js every file is a module by default
// modules are encapsulated code (only share minimum)

const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
console.log(data)

sayHi('shiva');
sayHi(names.shashi);
sayHi(names.jagad)