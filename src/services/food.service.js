const Graph = require('../Alg/Graph');
const helper = require('../helper');
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
         throw new Error(err.message);
      }
   },

   getLatestTopTenFood: async () => {
      try {
         const latestFoods = await Food.find().sort({ createdAt: -1 }).limit(10);
         return latestFoods;
      } catch (err) {
         throw new Error(err.message);
      }
   },

   getFoodById: async (id) => {
      try {
         const food = await Food.findById(id);
         if (!food) throw new Error('Food not found!');
         return food;
      } catch (err) {
         throw new Error(err.message);
      }
   },

   findNearestFood: async (location, distance = 8, limit = 10000000) => {
      try {
         const point = {
            type: 'Point',
            coordinates: location, // issues revers index for long tatue
         };
         const maxDistance = distance * 1000;
         const minDistance = 1;

         return Food.find({
            coordinates: {
               $near: {
                  $geometry: point,
                  $maxDistance: maxDistance,
                  $minDistance: minDistance,
               },
            },
         })
            .limit(limit)
            .sort({
               distance: 1,
            });
      } catch (err) {
         throw new Error(err.message);
      }
   },

   predictFood: async () => {
      return null;
   },

   scheduleFood: async (location) => {
      try {
         if (!location) throw new Error('User location invalid!');
         let foods = await FoodService.findNearestFood(location, 1000, 4);
         const graph = new Graph();
         let shortestPath = await graph.findShortSchedule(location, foods);
         shortestPath = shortestPath.map((path) => {
            return {
               from: path.source ?? null,
               to: path.destination,
               distance: helper.getDistanceFromArr(
                  path.source?.name ? path.source.coordinates.coordinates : location,
                  path.destination.coordinates.coordinates,
               ).distanceInKilometers,
            };
         });

         const totalDistance = shortestPath.reduce((acc, item) => acc + item.distance, 0);

         return {
            schedule: shortestPath,
            totalDistance,
         };
      } catch (error) {
         throw new Error(error.message);
      }
   },

   getFoodFromLabel: async (label) => {
      try {
         const food = await Food.findOne({ label: label });
         return food;
      } catch (error) {
         throw new Error(error.message);
      }
   },
};

module.exports = FoodService;
