const geolib = require('geolib');

const point1 = {
   latitude: 10.7436955592511,
   longitude: 106.68430794664252,
};

const point2 = {
   latitude: 10.733499699999998,
   longitude: 106.69644894755736,
};

const distanceInMeters = geolib.getDistanceFromArr(point1, point2);
const distanceInKilometers = distanceInMeters / 1000;

console.log(distanceInKilometers + ' km');
