const express = require("express");
const router = express.Router();
const userAction = require("../services/user-action");
const cache = require("../services/cache-module");

router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body, "1233");
    const result = await userAction.insertUser(req.body);
    res.json("succeed to signup!!!");
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    if (req.headers["authorization"] !== undefined) cache.deleteFromCache(req);
    const result = await userAction.login(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.get("/logout", (req, res) => {
  cache.deleteFromCache(req);
  res.json("succeed to logout!!!");
});

module.exports = router;
