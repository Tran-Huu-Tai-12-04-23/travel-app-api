const express = require("express");
const commonController = require("../controllers/common.controller");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post(
  "/suggest-location-schedule",
  commonController.suggestScheduleLocationTourForUser
);
router.post(
  "/suggest-food-schedule",
  commonController.suggestScheduleFoodTourForUser
);
router.post("/predict", commonController.predictImg);
router.post("/search_any", commonController.searchAny);
router.post("/food/search", commonController.searchFood);
router.post("/location/search", commonController.searchLocation);

module.exports = router;
