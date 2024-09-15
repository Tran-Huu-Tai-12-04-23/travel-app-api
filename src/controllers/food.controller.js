const helper = require("../helpers");
const FoodService = require("../services/food.service");
const GoogleMapService = require("../services/google.map.service");

const foodController = {
  findNearest: async (req, res) => {
    try {
      const { location, limit, distance } = req.body;
      //location is [longitude, latitude]
      if (!location) {
        return res.status(400).json({ message: "Invalid user location" });
      }

      let foods = await FoodService.findNearestFood(location, distance, limit);

      if (!foods) res.status(400).json({ message: "Food not found!" });
      console.log(location);
      foods = foods.map((food) => {
        return {
          ...food,
          distanceInfo: helper.getDistanceFromArrFromArr(
            location,
            food.coordinates.coordinates
          ),
        };
      });

      return res.json({
        result: foods,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  getFoodDetail: async (req, res) => {
    try {
      const { locationId } = req.query;

      if (!locationId) {
        return res.status(400).json({ message: "Invalid locationId " });
      }
      let food = await FoodService.getFoodById(locationId);
      if (!food) res.status(404).json({ message: "Food not found!" });
      // get near by food
      let foods = await FoodService.findNearestFood(
        food.coordinates.coordinates,
        10,
        4
      );
      foods = await Promise.all(
        foods.map(async (fd) => {
          return {
            ...fd._doc,
            distanceInfo: helper.getDistanceFromArrFromArr(
              food._doc.coordinates.coordinates,
              fd.coordinates.coordinates
            ),
          };
        })
      );
      return res.json({
        currentFood: food,
        nearFoods: foods,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = foodController;
