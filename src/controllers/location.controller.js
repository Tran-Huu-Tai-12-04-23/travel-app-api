const helper = require('../helper');
const LocationService = require('../services/location.service');

const locationController = {
   findNearest: async (req, res) => {
      try {
         const { location, limit, distance } = res.body;

         if (location) {
            return res.status(400).json({ message: 'Invalid user location' });
         }

         let locations = await LocationService.findNearestLocations(location, distance, limit);

         if (!locations) res.status(404).json({ message: 'Location not found!' });

         locations = locations.map((location) => {
            return {
               ...location,
               distanceInfo: helper.getDistanceFromArr(location.coordinates.coordinates),
            };
         });

         return res.json({
            result: locations,
         });
      } catch (error) {
         console.log('error', error);
         return res.status(400).json({ message: error });
      }
   },
   getLocationDetail: async (req, res) => {
      try {
         const { locationId } = req.query;
         if (!locationId) {
            return res.status(400).json({ message: 'Invalid locationId ' });
         }
         const location = await LocationService.getLocationById(locationId);
         if (!location) return res.status(404).json({ message: 'Location not found!' });
         //  get nearest location of this location
         let locations = await LocationService.findNearestLocations(location.coordinates.coordinates, 10, 4);
         if (!locations) res.status(404).json({ message: 'Location not found!' });
         locations = locations.map((lc) => {
            return {
               ...lc._doc,
               distanceInfo: helper.getDistanceFromArr(location.coordinates.coordinates, lc.coordinates.coordinates),
            };
         });
         return res.json({
            currentLocation: location,
            nearLocations: locations.sort((a, b) => a.distanceInfo.distanceKi - b.distanceInfo.distance),
         });
      } catch (error) {
         console.log('error', error);
         return res.status(400).json({ message: error });
      }
   },
};

module.exports = locationController;
