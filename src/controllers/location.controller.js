const LocationService = require('../services/location.service');

const locationController = {
   findNearest: async (req, res) => {
      try {
         const { userLocation, limit, distance } = res.body;

         if (userLocation) {
            return res.status(400).json({ message: 'Invalid user location' });
         }

         return LocationService.findNearestLocations(userLocation, distance, limit);
      } catch (error) {
         return res.status(400).json({ message: error.message });
      }
   },
   getLocationDetail: async (req, res) => {
      try {
         const { locationId } = req.params;

         if (locationId) {
            return res.status(400).json({ message: 'Invalid locationId ' });
         }

         return LocationService.getLocationById(locationId);
      } catch (error) {
         return res.status(400).json({ message: error.message });
      }
   },
};

module.exports = locationController;
