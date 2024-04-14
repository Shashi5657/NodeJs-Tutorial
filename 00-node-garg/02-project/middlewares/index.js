const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now()} : ${req.ip} ${req.method} : ${req.path} \n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = {
    logReqRes
}

// router.use((req, res, next) => {
//   console.log("hello from middleware 1");
//   req.myUsername = "shashiii";
//   next();
// });

// app.use((req, res, next) => {
//   console.log("hello from middleware 2", req.myUsername);
//   next();
// });