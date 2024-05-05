const foods = require('./assets/food');
const locations = require('./assets/location');
const LocationService = require('./services/location.service');
const FoodService = require('./services/food.service');

const FuncTest = async () => {
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
      //   const locations = await LocationService.findNearestLocations(
      //      {
      //         longitude: '106.772666',
      //         latitude: '10.7933689',
      //      },
      //      2,
      //   );
      //   const foods = await FoodService.findNearestFood(
      //      {
      //         longitude: '106.772666',
      //         latitude: '10.7933689',
      //      },
      //      2,
      //   );
      //   console.log(locations);
      //   console.log(foods);
      //    test suggest for user
      // const userLocation = {
      //    latitude: 10.7739888,
      //    longitude: 106.7010858,
      // };
      // const foods = await FoodService.scheduleFood(userLocation);
      // const locations = await LocationService.scheduleLocation(userLocation);
      // console.group('di an thoi bat dau tai => ', 'dia diem cua ban');
      // foods.schedule.forEach((element) => {
      //    console.log('from => ', element.from?.name ?? 'dia diem cua ban');
      //    console.log('to => ', element.to?.name);
      // });
      // console.groupEnd('Ve nha thoi => ', 'dia diem cua ban');
      // console.group('di du lich thoi bat dau tai => ', 'dia diem cua ban');
      // locations.schedule.forEach((element) => {
      //    console.log('from => ', element.from?.name ?? 'dia diem cua ban');
      //    console.log('to => ', element.to?.name);
      // });
      // console.log({
      //    foods,
      //    locations,
      // });
      // console.groupEnd('Ve nha thoi => ', 'dia diem cua ban');
   } catch (error) {
      console.log(error);
   }
};

module.exports = FuncTest;
