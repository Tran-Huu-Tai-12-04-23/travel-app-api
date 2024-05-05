const Food = require('../models/food.model');

const FoodService = {
   createFood: async (food) => {
      try {
         let foodExist = await Food.findOne({ name: food.name });

         if (foodExist) {
            throw new Error('food already exist!');
         }
         const newFood = new Food({ ...food });
         return await newFood.save();
      } catch (err) {
         throw err;
      }
   },

   getLatestTopTenFood: async () => {
      try {
         const latestFoods = await Food.find().sort({ createdAt: -1 }).limit(10);
         return latestFoods;
      } catch (err) {
         throw err;
      }
   },

   getFoodById: async (id) => {
      try {
         const food = await Food.findOneById(id);
         if (!food) throw new Error('Food not found!');
         return food;
      } catch (err) {
         throw err;
      }
   },

   findNearLestFood: async (location, distance = 8, limit = 10000000) => {
      try {
         const point = {
            type: 'Point',
            coordinates: [location?.longitude, location?.latitude],
         };
         const maxDistance = distance * 1000;

         return Food.find({
            coordinates: {
               $near: {
                  $geometry: point,
                  $maxDistance: maxDistance,
               },
            },
         })
            .limit(limit)
            .sort({
               distance: 1,
            });
      } catch (err) {
         throw err;
      }
   },
};

module.exports = FoodService;
