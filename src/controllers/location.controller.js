const helper = require('../helpers');
const LocationService = require('../services/location.service');

const locationController = {
  findNearest: async (req, res) => {
    try {
      const { location, limit, distance } = req.body;
      if (!location) {
        return res.status(400).json({ message: 'Invalid user location' });
      }

      let locations = await LocationService.findNearestLocations(location, distance, limit);

      if (!locations) res.status(404).json({ message: 'Location not found!' });

      locations = locations.map(async (location) => {
        return {
          ...location,
          distanceInfo: helper.getDistanceFromArrFromArr(location.coordinates.coordinates),
        };
      });
      const result = await Promise.all(locations);

      return res.json({
        result: result,
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
      if (!locations) return res.status(404).json({ message: 'Location not found!' });
      locations = await Promise.all(
        locations.map(async (lc) => {
          return {
            ...lc._doc,
            distanceInfo: helper.getDistanceFromArrFromArr(
              location.coordinates.coordinates,
              lc.coordinates.coordinates,
            ),
          };
        }),
      );
      return res.json({
        currentLocation: location,
        nearLocations: locations,
      });
    } catch (error) {
      console.log('error', error);
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = locationController;
