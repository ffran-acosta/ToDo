const { Router } = require("express");
const router = Router();

const controller = require('../controller/api.controller')    

router.get("/", controller.show);

module.exports = router;