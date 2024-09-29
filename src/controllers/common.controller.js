const helper = require('../helpers');
const foodService = require('../services/food.service');
const GoogleMapService = require('../services/google.map.service');
const locationService = require('../services/location.service');
const axios = require('axios');
const { translate } = require('../services/translate.service');

const commonController = {
  suggestScheduleFoodTourForUser: async (req, res) => {
    try {
      const { location } = req.body;
      // location is [longitude, latitude]
      if (!location) return res.status(400).json({ message: 'User location not  found!' });

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
      if (!location) return res.status(400).json({ message: 'User location not  found!' });

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
      const [locations, foods] = await Promise.all([this.predictLocation(req, res), this.predictFood(req, res)]);
      return res.json({
        locations: locations.locations || [],
        foods: foods.foods || [],
        isLocation: locations.isLocation,
        isFood: foods.isFood,
      });
    } catch (error) {
      console.log({ message: error.message });
      return res.status(400).json({ message: 'Can not recognize this sense!' });
    }
  },
  predictLocation: async (req, res) => {
    try {
      const { location, image_url } = req.body;

      if (!image_url) return res.status(404).json({ message: 'Please provided image!' });
      // location is [longitude, latitude]
      //   ==============
      const response = await axios.post(
        process.env.API_MODEL_GEMINI + '/classifyLocation',
        { image_url },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const { result } = response.data;

      if (!result) return res.status(404).json({ message: 'Location not found!' });

      const lstLocations = await locationService.getLocationsFromLabels(result);
      for (let i = 0; i < lstLocations.length; i++) {
        const distanceInfo = location
          ? helper.getDistanceFromArrFromArr(location, lstLocations[i]._doc.coordinates.coordinates)
          : null;
        lstLocations[i] = { ...lstLocations[i]._doc, distanceInfo };
      }

      return res.json({
        locations: lstLocations,
        isLocation: true,
      });
    } catch (error) {
      console.log({ message: error.message });
      return res.status(400).json({ message: 'Can not recognize this sense!' });
    }
  },
  predictFood: async (req, res) => {
    try {
      const { location, image_url } = req.body;

      if (!image_url) return res.status(404).json({ message: 'Please provided image!' });
      // location is [longitude, latitude]
      //   ==============
      const response = await axios.post(
        process.env.API_MODEL_GEMINI + '/classifyFood',
        { image_url },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const { result } = response.data;

      if (!result) return res.status(404).json({ message: 'Location not found!' });

      const foods = await foodService.getFoodsFromLabels(result);
      for (let i = 0; i < foods.length; i++) {
        const distanceInfo = location
          ? helper.getDistanceFromArrFromArr(location, foods[i]._doc.coordinates.coordinates)
          : null;
        foods[i] = { ...foods[i]._doc, distanceInfo };
      }

      return res.json({
        foods,
        isFood: true,
      });
    } catch (error) {
      console.log({ message: error.message });
      return res.status(400).json({ message: 'Can not recognize this sense!' });
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
      if (type === 'ALL') {
        const result = await Promise.all([
          foodService.search(query, skip, take / 2),
          locationService.search(query, skip, take / 2),
        ]);
        const locationRes = result[1].result.map((location) => {
          return {
            ...location,
            type: 'LOCATION',
          };
        });
        const foodRes = result[0].result.map((food) => {
          return {
            ...food,
            type: 'FOOD',
          };
        });
        return res.json([[...locationRes, ...foodRes], result[0].count + result[1].count]);
      } else if (type === 'LOCATION') {
        const result = await locationService.search(query, skip, take);
        const resultType = result.result.map((location) => {
          return {
            ...location,
            type: 'LOCATION',
          };
        });
        return res.json([resultType, result.count]);
      } else if (type === 'FOOD') {
        const result = await foodService.search(query, skip, take);
        const resultType = result.result.map((food) => {
          return {
            ...food,
            type: 'FOOD',
          };
        });
        return res.json([resultType, result.count]);
      }

      return json([[], 0]);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  translate: async (req, res) => {
    try {
      const text = req.body.text;
      const result = await translate(text);
      if (result) {
        return res.json(result);
      }
      return null;
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  translateWithOptions: async (req, res) => {
    try {
      const { text, option } = req.body;

      const response = await axios.post(
        process.env.API_MODEL_GEMINI + '/translation',
        { text: text, option: option },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response) {
        return res.json(response.data);
      }
      throw new Error('Can not translate this text!');
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = commonController;
