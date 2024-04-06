const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("req recieved");
  const log = `${Date.now()}: New req recieved \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch(req.url){
        case '/' : res.end('Home Page'); break;
        case '/about' : res.end('Myself Shashii'); break;
        case '/skills' : res.end('React & Node'); break;
        default : res.end('error, page not found')
    }
  });
});

server.listen(5000, () => {
  console.log("server started on port 5000");
});
