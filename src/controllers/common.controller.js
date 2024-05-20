const helper = require("../helper");
const foodService = require("../services/food.service");
const GoogleMapService = require("../services/google.map.service");
const locationService = require("../services/location.service");
const axios = require("axios");

const commonController = {
  suggestScheduleFoodTourForUser: async (req, res) => {
    try {
      const { location } = req.body;
      // location is [longitude, latitude]
      if (!location)
        return res.status(400).json({ message: "User location not  found!" });

      const foods = await foodService.scheduleFood(location);
      return res.json({
        scheduleFoods: foods,
        meta: location,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  suggestScheduleLocationTourForUser: async (req, res) => {
    try {
      const { location } = req.body;
      // location is [longitude, latitude]
      if (!location)
        return res.status(400).json({ message: "User location not  found!" });

      const locations = await locationService.scheduleLocation(location);

      return res.json({
        scheduleLocations: locations,
        meta: location,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  predictImg: async (req, res) => {
    try {
      const { location, image_url } = req.body;

      if (!image_url)
        return res.status(404).json({ message: "Please provided image!" });
      // location is [longitude, latitude]
      //   ==============
      const response = await axios.post(
        process.env.API_MODEL,
        { image_url },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { result } = response.data;

      if (!result)
        return res.status(404).json({ message: "Location not found!" });

      const locationLabel = await locationService.getLocationFromLabe(result);
      const food = await locationService.getLocationFromLabe(result);

      if (location) {
        const distanceInfo = helper.getDistanceFromArrFromArr(
          location,
          locationLabel._doc.coordinates.coordinates
        );
        return res.json({
          location: { ...locationLabel._doc, distanceInfo },
          food: null,
          meta: location,
        });
      }

      if (food) {
        const distanceInfo = helper.getDistanceFromArrFromArr(
          location,
          food._doc.coordinates.coordinates
        );
        return res.json({
          food: { ...food._doc, distanceInfo },
          location: null,
          meta: location,
        });
      }

      return res.status(400).json({ message: "Can not recognize this sense!" });
    } catch (error) {
      console.log({ message: error.message });
      return res.status(400).json({ message: "Can not recognize this sense!" });
    }
  },

  searchFood: async (req, res) => {
    try {
      const query = req.body.query;
      const skip = req.body.skip || 0;
      const take = req.body.take || 10;
      const result = await foodService.search(query, skip, take);
      return res.json([result.result, result.count]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  searchLocation: async (req, res) => {
    try {
      const query = req.body.query;
      const skip = req.body.skip || 0;
      const take = req.body.take || 10;
      const result = await locationService.search(query, skip, take);
      return res.json([result.result, result.count]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  searchAny: async (req, res) => {
    try {
      const query = req.body.query;
      const type = req.body.type;
      const skip = req.body.skip || 0;
      const take = req.body.take || 10;
      if (type === "ALL") {
        const result = await Promise.all([
          foodService.search(query, skip, take / 2),
          locationService.search(query, skip, take / 2),
        ]);
        const locationRes = result[1].result.map((location) => {
          return {
            ...location,
            type: "LOCATION",
          };
        });
        const foodRes = result[0].result.map((food) => {
          return {
            ...food,
            type: "FOOD",
          };
        });
        return res.json([
          [...locationRes, ...foodRes],
          result[0].count + result[1].count,
        ]);
      } else if (type === "LOCATION") {
        const result = await locationService.search(query, skip, take);
        const resultType = result.result.map((location) => {
          return {
            ...location,
            type: "LOCATION",
          };
        });
        return res.json([resultType, result.count]);
      } else if (type === "FOOD") {
        const result = await foodService.search(query, skip, take);
        const resultType = result.result.map((food) => {
          return {
            ...food,
            type: "FOOD",
          };
        });
        return res.json([resultType, result.count]);
      }

      return json([[], 0]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = commonController;
