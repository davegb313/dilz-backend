const router = require("express").Router();
const userDBServices = require("../db-services/user");

router.get("/", (req: any, res: any) => {
  return res.json("Backend is working");
});

// router.post("/create", (req: any, res: any) => {});

router.get("/users", (req: any, res: any) => {
  const users = userDBServices.getUsers();
  return res.json(users);
});

router.get("/user/:id", (req: any, res: any) => {
  const user = userDBServices.getUser(req.body.id);
  return res.json(user);
});

module.exports = router;
