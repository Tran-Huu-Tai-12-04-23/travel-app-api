const axios = require('axios');

const GoogleMapService = {
  getDistance: async (origin, destination) => {
    try {
      const response = await axios.get(
        `${process.env.LINK_GET_DISTANCE_API}origins=${origin[1]},${origin[0]}&destinations=${destination[1]},${destination[0]}&key=${process.env.GOOGLE_MAP_API_KEY}`,
      );

      const data = response.data.rows[0].elements[0];

      return {
        distanceKiloMetres: {
          value: data.distance.value,
          text: data.distance.text,
        },
        estimateTime: {
          value: data.duration.value,
          text: data.duration.text,
        },
      };
    } catch (error) {
      // console.log(error);
      console.log('Het han api key');
      return null;
    }
  },

  getDistanceValue: async (origin, destination) => {
    try {
      const response = await axios.get(
        `${process.env.LINK_GET_DISTANCE_API}origins=${origin[1]},${origin[0]}&destinations=${destination[1]},${destination[0]}&key=${process.env.GOOGLE_MAP_API_KEY}`,
      );
      const data = response?.data?.rows[0]?.elements[0];
      return data?.distance?.value;
    } catch (error) {
      return 0;
    }
  },
};

module.exports = GoogleMapService;
