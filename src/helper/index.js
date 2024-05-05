const geolib = require('geolib');

class Helper {
   getDistance(ori, des) {
      const distanceInMeters = geolib.getDistance(ori, des);
      const distanceInKilometers = distanceInMeters / 1000;

      return {
         distanceInKilometers,
         distanceInMeters,
      };
   }
}

module.exports = new Helper();
