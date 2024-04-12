const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require('fs')

const app = express();
const PORT = 8000;

//middleware
app.use(express.urlencoded({extended : false}))

app.use((req, res, next)=> {
  console.log('hello from middleware 1')
  req.myUsername = "shashiii"
  next()
})

app.use((req, res, next)=> {
  console.log('hello from middleware 2', req.myUsername)
  next();
})

//Routes

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  res.setHeader('myname', 'shashi')
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({error : '404 not found'})
    return res.json(user);
  })
  .patch((rew, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || body.job_title){
    return res.status(400).json({msg : 'all fields are required'})
  }
  users.push({...body, id : users.length + 1});
  fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err, response)=> {
    return res.status(201).json({ status: "success", id : users.length });
  })
  
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
