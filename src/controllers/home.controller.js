const helper = require('../helper');
const authService = require('../services/auth.service');
const FoodService = require('../services/food.service');
const LocationService = require('../services/location.service');

const homeController = {
   getHomeData: async (req, res) => {
      try {
         const { userLocation } = req.body;

         if (userLocation) {
            const topFoodNearest = await FoodService.findNearestFood(userLocation, 100, 10);
            const topLocationNearest = await LocationService.findNearestLocations(userLocation, 100, 10)();
            const newFoods = topFoodNearest.map((food) => {
               return {
                  distanceInfo: helper.getDistance(
                     [userLocation.longitude, userLocation.latitude],
                     food._doc.coordinates.coordinates,
                  ),
                  ...food?._doc,
               };
            });
            const newLocations = topLocationNearest.map((location) => {
               return {
                  distanceInfo: helper.getDistance(
                     [userLocation.longitude, userLocation.latitude],
                     location._doc.coordinates.coordinates,
                  ),
                  ...location?._doc,
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
         return res.status(500).json(err.message);
      }
   },
};

module.exports = homeController;
