const Graph = require('../Alg/Graph');
const helper = require('../helper');
const Location = require('../models/location.model');

const LocationService = {
   createLocation: async (location) => {
      try {
         let locationExist = await Location.findOne({ name: location.name });

         if (locationExist) {
            throw new Error('location already exist!');
         }
         const newLocation = new Location({ ...location });
         return await newLocation.save();
      } catch (err) {
         throw err;
      }
   },

   getLatestTopTenLocation: async () => {
      try {
         const latestLocations = await Location.find().sort({ createdAt: -1 }).limit(10);
         return latestLocations;
      } catch (err) {
         throw err;
      }
   },

   getLocationById: async (id) => {
      try {
         const location = await Location.findOneById(id);
         if (!location) throw new Error('location not found!');
         return location;
      } catch (err) {
         throw err;
      }
   },

   findNearestLocations: async (location, distance = 8, limit = 1000) => {
      try {
         const point = {
            type: 'Point',
            coordinates: [location?.longitude, location?.latitude],
         };
         const maxDistance = distance * 1000;

         return Location.find({
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

   predictLocation: async () => {
      return null;
   },

   scheduleLocation: async (userLocation) => {
      try {
         if (!userLocation) throw new Error('User location invalid!');
         let locations = await LocationService.findNearestLocations(userLocation, 1000, 4);
         const graph = new Graph();
         let shortestPath = await graph.findShortSchedule(userLocation, locations);
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

module.exports = LocationService;
