const fs = require("fs");

// fs.writeFileSync('./test.txt', "Hello world...")

// fs.writeFile('./test.txt', "Hello world.", (err)=> {})

// const result = fs.readFileSync('./test.txt', 'utf-8')

// fs.readFile("./test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

fs.appendFileSync('./test.txt' , 'kya bolthe public...')

