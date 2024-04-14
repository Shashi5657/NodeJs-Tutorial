const express = require("express");
//created a router here
const router = express.Router();
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/user')

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

//and then here ezported the router
module.exports = router;

//   router.get("/", async(req, res) => {
//     const allDbUsers = await User.find({})
//     const html = `
//       <ul>
//       ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//       </ul>
//       `;
//     res.send(html);
//   });
