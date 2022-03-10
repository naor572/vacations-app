const express = require("express");
const router = express.Router();
const vacationAction = require("../services/vacation-action");
const cache = require("../services/cache-module");

//get all vacations from D.B grom get req with token
router.get("/", async (req, res, next) => {
  try {
    const userData = cache.extractUserDataFromCache(req);
    const result = await vacationAction.getAllVacation(userData);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

//get all details on vacation from get req with id vacation
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await vacationAction.getVacation(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

//add follow by get vacation_id and user_id from token
router.get("/AddFollow/:vacationId", async (req, res, next) => {
  try {
    const { vacationId } = req.params;
    const userData = cache.extractUserDataFromCache(req);
    const result = await vacationAction.addFollow(userData, vacationId);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
//delete follow from D.B (followed_vacations) by get from req vacaion id and user id from token
router.get("/Unfollow/:vacationId", async (req, res, next) => {
  try {
    const { vacationId } = req.params;
    const userData = cache.extractUserDataFromCache(req);
    const result = await vacationAction.Unfollow(userData, vacationId);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
//delete vacation from D.B (vacation) by get vacation_id
router.get("/removeVacation/:vacationId", async (req, res, next) => {
  try {
    const { vacationId } = req.params;
    const userData = cache.extractUserDataFromCache(req);
    const result = await vacationAction.removeVacation(userData, vacationId);
    res.json(result);
  } catch (err) {
    next(err);
  }
});
//add vacation to D.B (vacation) by get from req all details on the vacation and user id from token
router.post("/", async (req, res, next) => {
  try {
    const vacationDetails = req.body;
    const userData = cache.extractUserDataFromCache(req);
    await vacationAction.addVacation(userData.is_admin, vacationDetails);
    res.json("vacation has been added!!");
  } catch (err) {
    next(err);
  }
});
// update vacation by get from req vacation details updated and uiser id from token
router.post("/updateVaction", async (req, res, next) => {
  try {
    const vacationDetails = req.body;
    const userData = cache.extractUserDataFromCache(req);
    await vacationAction.editVacation(userData.is_admin, vacationDetails);
    res.json("vacation has been updatead!!");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
