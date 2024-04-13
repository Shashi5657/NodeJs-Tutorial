const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;
//mongoose connection
mongoose
  .connect("mongodb://127.0.0.1:27017/first-project")
  .then(() => 
    console.log("mongodb connected")
  )
  .catch((err) => 
    console.log("mongo error", err)
  )
//middleware
app.use(express.urlencoded({ extended: false }));

//schema - defining the structure here

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

//here we r creating a model here
//here we gave it a name user & passed the schema userSchema
//now using this User object we can interact with mongoose

const User = mongoose.model("user", userSchema);

app.use((req, res, next) => {
  console.log("hello from middleware 1");
  req.myUsername = "shashiii";
  next();
});

app.use((req, res, next) => {
  console.log("hello from middleware 2", req.myUsername);
  next();
});

//Routes

app.get("/users", async(req, res) => {
  const allDbUsers = await User.find({})
  const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users", async(req, res) => {
  const allDbUsers = await User.find({})
  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async(req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "404 not found" });
    return res.json(user);
  })
  .patch(async(req, res) => {
    await User.findByIdAndUpdate(req.params.id , {lastName : 'Changed'})
    return res.json({ status: "success" });
  })
  .delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "success" });
  });

app.post("/api/users", async(req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "all fields are required" });
  }
  //we sending the details to the database using User object that we created
  const result = await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email : body.email,
    gender: body.gender,
    jobTitle : body.job_title
  })

  console.log(result)

  return res.status(201).send({msg : "success"})

});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
