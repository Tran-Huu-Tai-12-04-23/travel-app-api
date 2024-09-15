const Graph = require('../Alg/Graph');
const helper = require('../helpers');
const Location = require('../models/location.model');
const GoogleMapService = require('./google.map.service');

const LocationService = {
  search: async (query, skip = 0, take = 10) => {
    try {
      const [result, count] = await Promise.all([
        Location.find({
          $or: [{ name: { $regex: new RegExp(query, 'i') } }, { description: { $regex: new RegExp(query, 'i') } }],
        })
          .skip(skip)
          .limit(take)
          .lean(),
        Location.countDocuments({
          $or: [{ name: { $regex: new RegExp(query, 'i') } }, { description: { $regex: new RegExp(query, 'i') } }],
        }),
      ]);
      return { result, count };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  createLocation: async (location) => {
    try {
      let locationExist = await Location.findOne({ name: location.name });

      if (locationExist) {
        throw new Error('location already exist!');
      }
      const newLocation = new Location({ ...location });
      return await newLocation.save();
    } catch (err) {
      throw new Error(err.message);
    }
  },

  getLatestTopTenLocation: async () => {
    try {
      const latestLocations = await Location.find().sort({ createdAt: -1 }).limit(10);
      return latestLocations;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  getLocationById: async (id) => {
    try {
      const location = await Location.findById(id);
      if (!location) throw new Error('location not found!');
      return location;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  // location is [latitude, longitude]
  findNearestLocations: async (location, distance = 8, limit = 1000) => {
    try {
      const point = {
        type: 'Point',
        coordinates: location, // issues revers index for long tatue
      };
      const maxDistance = distance * 1000;
      const minDistance = 1;
      return Location.find({
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

  scheduleLocation: async (location) => {
    try {
      if (!location) throw new Error('User location invalid!');
      let locations = await LocationService.findNearestLocations(location, 1000, 4);
      const graph = new Graph();
      let shortestPath = await graph.findShortSchedule(location, locations);
      shortestPath = await Promise.all(
        shortestPath.map(async (path) => {
          return {
            from: path.source ?? null,
            to: path.destination,
            distance: helper.getDistanceFromArrFromArr(
              path.source?.name ? path.source.coordinates.coordinates : location,
              path.destination.coordinates.coordinates,
            ),
          };
        }),
      );

      const totalDistance = shortestPath.reduce((acc, item) => acc + item.distance?.distanceKiloMetres?.value, 0);

      return {
        schedule: shortestPath,
        totalDistance,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getLocationFromLabe: async (label) => {
    try {
      const location = await Location.findOne({ label: label });
      return location;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = LocationService;
