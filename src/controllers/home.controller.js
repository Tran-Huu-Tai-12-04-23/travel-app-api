const helper = require('../helper');
const authService = require('../services/auth.service');
const FoodService = require('../services/food.service');
const GoogleMapService = require('../services/google.map.service');
const LocationService = require('../services/location.service');

const homeController = {
  getHomeData: async (req, res) => {
    try {
      const { location } = req.body;

      if (location) {
        const topFoodNearest = await FoodService.findNearestFood(location, 100, 10);
        const topLocationNearest = await LocationService.findNearestLocations(location, 100, 10);

        const foodPromises = topFoodNearest.map(async (food) => {
          const data = helper.getDistanceFromArrFromArr(location, food.coordinates.coordinates);
          return {
            distanceInfo: data,
            ...food?._doc,
          };
        });

        const locationPromises = topLocationNearest.map(async (lc) => {
          const data = helper.getDistanceFromArrFromArr(location, lc.coordinates.coordinates);
          return {
            distanceInfo: data,
            ...lc?._doc,
          };
        });

        const newFoods = await Promise.all(foodPromises);
        const newLocations = await Promise.all(locationPromises);

        return res.json({
          foods: newFoods,
          locations: newLocations,
        });
      }
      //  when not provide location

      const latestTopTenFood = await FoodService.getLatestTopTenFood();
      const latestTopTenLocation = await LocationService.getLatestTopTenLocation();

      return res.json({
        foods: latestTopTenFood,
        locations: latestTopTenLocation,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err.message);
    }
  },
};

module.exports = homeController;
