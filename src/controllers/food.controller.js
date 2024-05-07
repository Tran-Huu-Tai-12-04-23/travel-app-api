const helper = require('../helper');
const FoodService = require('../services/food.service');

const foodController = {
   findNearest: async (req, res) => {
      try {
         const { location, limit, distance } = res.body;
         //location is [longitude, latitude]
         if (location) {
            return res.status(400).json({ message: 'Invalid user location' });
         }

         let foods = await FoodService.findNearestFood(location, distance, limit);

         if (!foods) res.status(400).json({ message: 'Food not found!' });

         foods = foods.map((food) => {
            return {
               ...food,
               distanceInfo: helper.getDistanceFromArr(location, food.coordinates.coordinates),
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
            return res.status(400).json({ message: 'Invalid locationId ' });
         }
         let food = await FoodService.getFoodById(locationId);
         if (!food) res.status(404).json({ message: 'Food not found!' });
         // get near by food
         let foods = await FoodService.findNearestFood(food.coordinates.coordinates, 10, 4);
         foods = foods.map((fd) => {
            return {
               ...fd._doc,
               distanceInfo: helper.getDistanceFromArr(food._doc.coordinates.coordinates, fd.coordinates.coordinates),
            };
         });
         return res.json({
            currentFood: food,
            nearFoods: foods.sort((a, b) => a.distanceInfo.distanceKi - b.distanceInfo.distance),
         });
      } catch (error) {
         console.log(error);
         return res.status(400).json({ message: error.message });
      }
   },
};

module.exports = foodController;
