const { Router } = require("express");
const router = Router();


const controller = require('../controller/api.controller')    

router.get("/", controller.home);
router.get("/users", controller.users);
router.get("/tasks", controller.tasks);
// router.get("/prueba", controller.prueba);

module.exports = router;