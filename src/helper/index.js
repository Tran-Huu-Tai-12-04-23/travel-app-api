const geolib = require('geolib');

class Helper {
  getDistanceFromArr(ori, des) {
    const distanceInMeters = geolib.getDistance(ori, des);
    const distanceInKilometers = distanceInMeters / 1000;

    return {
      distanceInKilometers,
      distanceInMeters,
    };
  }

  getDistanceFromArrFromArr(ori, des) {
    const distanceInMeters = geolib.getDistance(
      {
        latitude: ori[1],
        longitude: ori[0],
      },
      {
        latitude: des[1],
        longitude: des[0],
      },
    );
    const distanceInKilometers = distanceInMeters / 1000;

    return {
      distanceInKilometers,
      distanceInMeters,
    };
  }
}

module.exports = new Helper();
