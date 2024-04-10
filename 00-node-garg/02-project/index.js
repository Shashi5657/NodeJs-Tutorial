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
  users.push({...body, id : users.length + 1});
  fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err, response)=> {
    return res.json({ status: "success", id : users.length });
  })
  
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
