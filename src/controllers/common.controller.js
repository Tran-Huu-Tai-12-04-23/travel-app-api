const foodService = require('../services/food.service');
const locationService = require('../services/location.service');

const commonController = {
   suggestScheduleForUser: async (req, res) => {
      try {
         const { userLocation } = req.body;
         if (!userLocation) return res.status(400).json({ message: 'User location not  found!' });

         const foods = await foodService.suggestFood(userLocation);
         const locations = await locationService.suggestLocation(userLocation);

         return res.json({
            scheduleFoods: foods,
            scheduleLocations: locations,
         });
      } catch (error) {
         return res.status(400).json({ message: err.message });
      }
   },
};

module.exports = commonController;
