const express = require("express");
const commonController = require("../controllers/common.controller");
const router = express.Router();
const multer = require("multer");

const storage = multer.memoryStorage();

router.post(
  "/suggest-location-schedule",
  commonController.suggestScheduleLocationTourForUser
);
router.post(
  "/suggest-food-schedule",
  commonController.suggestScheduleFoodTourForUser
);
router.post("/predict", commonController.predictImg);
router.post("/predict_location", commonController.predictLocation);
router.post("/predict_food", commonController.predictFood);
router.post("/translate", commonController.translate);
router.post("/translate_with_options", commonController.translateWithOptions);
router.post("/search_any", commonController.searchAny);
router.post("/food/search", commonController.searchFood);
router.post("/location/search", commonController.searchLocation);

module.exports = router;
