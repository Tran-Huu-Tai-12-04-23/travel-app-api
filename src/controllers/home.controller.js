const helper = require('../helper');
const authService = require('../services/auth.service');
const FoodService = require('../services/food.service');
const LocationService = require('../services/location.service');

const homeController = {
   getHomeData: async (req, res) => {
      try {
         const { userLocation } = req.body;

         const latestTopTenFood = await FoodService.getLatestTopTenFood();
         const latestTopTenLocation = await LocationService.getLatestTopTenLocation();

         if (userLocation) {
            const newFoods = latestTopTenFood.map((food) => {
               return {
                  distanceInfo: helper.getDistance(
                     [userLocation.latitude, userLocation.longitude],
                     food._doc.coordinates,
                  ),
                  ...food?._doc,
               };
            });
            const newLocations = latestTopTenLocation.map((location) => {
               return {
                  distanceInfo: helper.getDistance(
                     [userLocation.latitude, userLocation.longitude],
                     location._doc.coordinates,
                  ),
                  ...location?._doc,
               };
            });

            return res.json({
               foods: newFoods,
               locations: newLocations,
            });
         }

         return res.json({ foods: latestTopTenFood, locations: latestTopTenLocation });
      } catch (err) {
         return res.status(500).json(err.message);
      }
   },
};

module.exports = homeController;
