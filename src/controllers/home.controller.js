const helper = require('../helper');
const authService = require('../services/auth.service');
const FoodService = require('../services/food.service');
const LocationService = require('../services/location.service');

const homeController = {
   getHomeData: async (req, res) => {
      try {
         const { location } = req.body;

         if (location) {
            const topFoodNearest = await FoodService.findNearestFood(location, 100, 10);
            const topLocationNearest = await LocationService.findNearestLocations(location, 100, 10);
            const newFoods = topFoodNearest.map((food) => {
               return {
                  distanceInfo: helper.getDistanceFromArr(location, food.coordinates.coordinates),
                  ...food?._doc,
               };
            });
            const newLocations = topLocationNearest.map((lc) => {
               return {
                  distanceInfo: helper.getDistanceFromArr(location, lc.coordinates.coordinates),
                  ...lc?._doc,
               };
            });

            return res.json({
               foods: newFoods,
               locations: newLocations,
            });
         }
         //  when not provide location

         const latestTopTenFood = await FoodService.getLatestTopTenFood();
         const latestTopTenLocation = await LocationService.getLatestTopTenLocation();

         return res.json({ foods: latestTopTenFood, locations: latestTopTenLocation });
      } catch (err) {
         console.log(err);
         return res.status(500).json(err.message);
      }
   },
};

module.exports = homeController;
