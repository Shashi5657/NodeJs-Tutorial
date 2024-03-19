const http = require("http");

//using event emitter api
const server = http.createServer();

//emitsrequest event
//listen for it/ respond to it
server.on("request", (req, res) => {
  res.end("Hello There!!");
});

server.listen(5000);
