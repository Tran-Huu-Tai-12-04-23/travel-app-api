const FoodService = require('../services/food.service');

const foodController = {
   findNearest: async (req, res) => {
      try {
         const { userLocation, limit, distance } = res.body;

         if (userLocation) {
            return res.status(400).json({ message: 'Invalid user location' });
         }

         return FoodService.findNearestFood(userLocation, distance, limit);
      } catch (error) {
         return res.status(400).json({ message: error.message });
      }
   },
   getFoodDetail: async (req, res) => {
      try {
         const { locationId } = req.params;

         if (locationId) {
            return res.status(400).json({ message: 'Invalid locationId ' });
         }

         return FoodService.getFoodById(locationId);
      } catch (error) {
         return res.status(400).json({ message: error.message });
      }
   },
};

module.exports = foodController;
