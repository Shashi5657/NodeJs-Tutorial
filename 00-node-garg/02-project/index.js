const express = require("express");
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares/index");
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

//mongoose connection
connectMongoDb("mongodb://127.0.0.1:27017/first-project").then(()=> console.log('mongodb connected'));

//middleware plugin
app.use(express.urlencoded({ extended: false }));
//middleware setup & sending filename as param
app.use(logReqRes("log.txt"));
//Routes
//if any requests comes on /user  use this userRouter
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
