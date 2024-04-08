const express = require('express')

const app = express();

app.get('/', (req,res)=> {
  res.send("This is Home Page")
})

app.get('/about', (req,res)=> {
  res.send("This is About Page" + " Hey, you are " + req.query.name  + " your age is " + req.query.age )
})

app.listen(5000, ()=> {
  console.log('Server listening on 5000')
})