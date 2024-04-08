const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log("req recieved");
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} New req recieved \n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const userName = myUrl.query.myname;
        res.end(`hi ${userName}`);
        break;
      case "/skills":
        res.end("React & Node");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("result for" + search);
        break;
      case "/signup":
        if (req.method === "GET") res.end("This is a signup form");
        else if (req.method === "POST") res.end("Success");
        break;
      default:
        res.end("error, page not found");
    }
  });
});

server.listen(5000, () => {
  console.log("server started on port 5000");
});
