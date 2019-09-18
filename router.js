const { Router } = require("express");
const router = new Router();
router.get("/", (request, response) => response.send("seperated"));

module.exports = router;
