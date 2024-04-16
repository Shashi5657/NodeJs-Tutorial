const express = require("express");
const { connectToMongoDb } = require("./connect");
const URL = require('./models/url')
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("mongoDb connected")
);

app.use(express.json())

app.use("/url", urlRoute);

app.get('/:shortId', async(req,res)=> {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {$push : {
        visitHistory : {
            timeStamp : Date.now()
        }
    }})
    res.redirect(entry.redirectedUrl)
})

app.listen(PORT, () => {
  console.log(`Server started on PORT : ${PORT}`);
});
