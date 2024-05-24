const foods = require("./assets/food");
const locations = require("./assets/location");
const LocationService = require("./services/location.service");
const FoodService = require("./services/food.service");
const GoogleMapService = require("./services/google.map.service");

const FuncTest = async () => {
  try {
    const location = [106.68507499797778, 10.743321644716596];

    // const topFoodNearest = await FoodService.findNearestFood(location, 100, 10);
    // const topLocationNearest = await LocationService.findNearestLocations(location, 100, 10);

    // const foodPromises = topFoodNearest.map(async (food) => {
    //    const data = helper.getDistanceFromArrFromArr(location, food.coordinates.coordinates);
    //    return {
    //       distanceInfo: data,
    //       ...food?._doc,
    //    };
    // });

    // const locationPromises = topLocationNearest.map(async (lc) => {
    //    const data = helper.getDistanceFromArrFromArr(location, lc.coordinates.coordinates);
    //    return {
    //       distanceInfo: data,
    //       ...lc?._doc,
    //    };
    // });

    // const newFoods = await Promise.all(foodPromises);
    // const newLocations = await Promise.all(locationPromises);

    // console.log({
    //    foods: newFoods,
    //    locations: newLocations,
    // });
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
    // const foods = await FoodService.findNearestFood(location, 1000, 4);
    //   console.log(locations);
    //    test suggest for user
    // const foods = await FoodService.scheduleFood(location);
    // const locations = await LocationService.scheduleLocation(location);
    // console.group("di an thoi bat dau tai => ", "dia diem cua ban");
    // foods.schedule.forEach((element) => {
    //   console.log("from => ", element.from?.name ?? "dia diem cua ban");
    //   console.log("to => ", element.to?.name);
    //   // console.log(element);
    // });
    // console.groupEnd("Ve nha thoi => ", "dia diem cua ban");
    // console.group("di du lich thoi bat dau tai => ", "dia diem cua ban");
    // locations.schedule.forEach((element) => {
    //   console.log("from => ", element.from?.name ?? "dia diem cua ban");
    //   console.log("to => ", element.to?.name);
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
