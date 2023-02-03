const { Router } = require("express");
const router = Router();

const controller = require("../controller/users.api.controller")

router.get("/users", controller.users)

module.exports = router