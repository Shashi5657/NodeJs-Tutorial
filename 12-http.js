const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Homepage");
  }
  if(req.url === '/about'){
    res.end('Here is our About Page')
  }
  res.end(`
  <h1>Oops!!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back to Home Page</a>`)
});

server.listen(5000);
