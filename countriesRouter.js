const { Router } = require("express");
const router = new Router();
router.get("/countries", (request, response) =>
  response.send(["Netherlands", "India"])
);
module.exports = router;
