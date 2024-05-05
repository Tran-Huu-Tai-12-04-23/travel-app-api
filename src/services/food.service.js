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

   findNearestFood: async (location, distance = 8, limit = 10000000) => {
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

   predictFood: async () => {
      return null;
   },

   scheduleFood: async (userLocation) => {
      try {
         if (!userLocation) throw new Error('User location invalid!');
         let foods = await FoodService.findNearestFood(userLocation, 1000, 4);
         const graph = new Graph();
         let shortestPath = await graph.findShortSchedule(userLocation, foods);
         shortestPath = shortestPath.map((path) => {
            return {
               from: path.source?.name ?? null,
               to: path.destination,
               distance: helper.getDistance(
                  path.source?.name ? path.source.coordinates.coordinates : userLocation,
                  path.destination.coordinates.coordinates,
               ).distanceInKilometers,
            };
         });

         const totalDistance = shortestPath.reduce((acc, item) => acc + item.distance, 0);

         // console.log({
         //    schedule: shortestPath,
         //    totalDistance,
         //    meta: userLocation,
         // });
         return {
            schedule: shortestPath,
            totalDistance,
         };
      } catch (error) {
         throw error;
      }
   },
};

module.exports = FoodService;
