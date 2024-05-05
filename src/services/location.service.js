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

   findNearbyLocations: async (location, distance = 8, limit = 1000) => {
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
};

module.exports = LocationService;
