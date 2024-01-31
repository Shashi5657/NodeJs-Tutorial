//npm - global command comes with node
// npm -version

// local dependency = use it only in this project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>

// package.json - manifest  file (stores important info about project/package)
// manual approach(create package.json in the root, create properties etc)
// npm init -y

const _ = require('lodash')

const items = [1, [2, [3 , [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');