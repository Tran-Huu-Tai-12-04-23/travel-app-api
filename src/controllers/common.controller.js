const helper = require('../helper');
const foodService = require('../services/food.service');
const locationService = require('../services/location.service');
const axios = require('axios');

const commonController = {
   suggestScheduleForUser: async (req, res) => {
      try {
         const { userLocation } = req.body;
         if (!userLocation) return res.status(400).json({ message: 'User location not  found!' });

         const foods = await foodService.suggestFood(userLocation);
         const locations = await locationService.suggestLocation(userLocation);

         return res.json({
            scheduleFoods: foods,
            scheduleLocations: locations,
            meta: userLocation,
         });
      } catch (error) {
         return res.status(400).json({ message: err.message });
      }
   },

   predictImg: async (req, res) => {
      try {
         if (!req.file) {
            return res.status(400).json({ error: 'Không có ảnh được tải lên' });
         }
         const { userLocation } = req.body;

         if (!userLocation) return res.status(400).json({ message: 'User location not  found!' });

         //   ==============
         const imageData = req.file;
         const formData = new FormData();
         const blob = new Blob([imageData.buffer], { type: imageData.contentType });
         formData.append('pic', blob, { filename: imageData.filename, contentType: imageData.contentType });

         const response = await axios.post('http://devtt.top:3001/classify', formData, {
            headers: {
               'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            },
         });

         const { result } = response.data;

         if (!result) return res.status(404).json({ message: 'Location not found!' });

         const location = await locationService.getLocationFromLabe(result);
         const food = await locationService.getLocationFromLabe(result);

         if (location)
            return res.json({
               location: location,
               food: null,
               distance: helper.getDistance(userLocation, location.coordinates.coordinates),
               userLocation: userLocation,
            });

         if (food) {
            return res.json({
               food: food,
               location: null,
               distance: helper.getDistance(userLocation, location.coordinates.coordinates),
               userLocation: userLocation,
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
