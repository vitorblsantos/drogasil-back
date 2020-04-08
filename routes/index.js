const { route, quote } = require("../controller");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<h1>Server Working</h1>");
});

router.get("/quote/:from/:to", async (req, res) => {
  try {
    const { from, to } = req.params;
    res.send(await quote(from, to));
  } catch {
    res.send("Controller error - Quote");
  }
});

router.post("/route", async (req, res) => {
  try {
    const { from, to, price } = req.body;
    res.send(await route(from, to, price));
  } catch {
    res.send("Controller error - Route");
  }
});

module.exports = router;
