const { Router } = require("express");
const students = ["sowjanya"];
const router = new Router();

router.get("/student", (request, response) => response.send(students));
module.exports = router;
