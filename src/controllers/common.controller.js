const helper = require('../helper');
const foodService = require('../services/food.service');
const locationService = require('../services/location.service');
const axios = require('axios');

const commonController = {
   suggestScheduleForUser: async (req, res) => {
      try {
         const { location } = req.body;
         // location is [longitude, latitude]
         if (!location) return res.status(400).json({ message: 'User location not  found!' });

         const foods = await foodService.suggestFood(location);
         const locations = await locationService.suggestLocation(location);

         return res.json({
            scheduleFoods: foods,
            scheduleLocations: locations,
            meta: location,
         });
      } catch (error) {
         return res.status(400).json({ message: err.message });
      }
   },

   predictImg: async (req, res) => {
      try {
         const { location, image_url } = req.body;

         if (!image_url) return res.status(404).json({ message: 'Please provided image!' });
         // location is [longitude, latitude]
         //   ==============
         const response = await axios.post(
            process.env.API_MODEL,
            { image_url },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            },
         );

         const { result } = response.data;

         if (!result) return res.status(404).json({ message: 'Location not found!' });

         const locationLabel = await locationService.getLocationFromLabe(result);
         const food = await locationService.getLocationFromLabe(result);

         if (location)
            return res.json({
               location: locationLabel,
               food: null,
               distance: location
                  ? helper.getDistanceFromArr(location, locationLabel._doc.coordinates.coordinates)
                  : null,
               meta: location,
            });

         if (food) {
            return res.json({
               food: food,
               location: null,
               distance: location ? helper.getDistanceFromArr(location, food._doc.coordinates.coordinates) : null,
               meta: location,
            });
         }

         return res.status(400).json({ message: 'Can not recognize this sense!' });
      } catch (error) {
         console.log({ message: error.message });
         return res.status(400).json({ message: 'Can not recognize this sense!' });
      }
   },
};

module.exports = commonController;
