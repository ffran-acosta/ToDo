const { Router } = require("express");
const router = Router();

const controller = require("../controller/users.api.controller")

router.post("/user/singup", controller.register)
router.post("/user/login", controller.login)
router.get("/users", controller.users)

module.exports = router