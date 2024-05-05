const express = require('express');
require('dotenv').config();
const db = require('../src/config/mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index.route');
const foods = require('./assets/food');
const locations = require('./assets/location');
const LocationService = require('./services/location.service');
const FoodService = require('./services/food.service');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.status(400).send('HUUTAI CI/CD');
});
app.use('/api', router);

const test = async () => {
   try {
      // locations.forEach(async (location) => {
      //    await LocationService.createLocation({
      //       ...location,
      //       coordinates: {
      //          type: 'Point',
      //          coordinates: [location.coordinates[1], location.coordinates[0]],
      //       },
      //    });
      // }),
      //    foods.forEach(async (food) => {
      //       await FoodService.createFood({
      //          ...food,
      //          coordinates: {
      //             type: 'Point',
      //             coordinates: [food.coordinates[1], food.coordinates[0]],
      //          },
      //       });
      //    });
      // const locationss = await LocationService.getLatestTopTenLocation();
      const locations = await LocationService.findNearbyLocations(
         {
            longitude: '106.772666',
            latitude: '10.7933689',
         },
         2,
      );

      const foods = await FoodService.findNearLestFood(
         {
            longitude: '106.772666',
            latitude: '10.7933689',
         },
         2,
      );
      console.log(locations);
      console.log(foods);
   } catch (error) {
      console.log(error);
   }
};
// app.use('/api', router);
db.connectToDatabase().then(function () {
   console.log('DB connect successfully!');
   app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      test();
   });
});
