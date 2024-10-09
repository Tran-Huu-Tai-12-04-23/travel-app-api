const Food = require('../models/food.model');
const Location = require('../models/location.model');
const crud = {
  handleServiceAddFood: async (foodData) => {
    try {
      if (!foodData.id) {
        const newFood = new Food({ ...foodData });
        return await newFood.save();
      } else {
        const food = await Food.findOne({ _id: foodData.id });
        if (food) {
          throw new Error('food already exist!');
        }
        const newFood = new Food({ ...foodData });
        return await newFood.save();
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceUpdateFood: async (foodData) => {
    try {
      if (!foodData.id || foodData.id === undefined) {
        throw new Error('id is not found');
      }
      const food = await Food.findOne({ _id: foodData.id });
      if (food) {
        return await Food.updateOne({ _id: foodData.id }, foodData);
      }
      throw new Error('food not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceDeleteFood: async (foodID) => {
    try {
      if (!foodID || foodID === undefined) {
        throw new Error('id is not found');
      }
      const food = await Food.findOne({ _id: foodID });
      if (food) {
        return await Food.deleteOne({ _id: foodID });
      }
      throw new Error('food not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceGetAllFood: async (foodID) => {
    try {
      if (!foodID || foodID === undefined) {
        throw new Error('id is not found');
      }
      const food = await Food.find();
      if (food) {
        return food;
      }
      throw new Error('food not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceGetFood: async (foodID) => {
    try {
      if (!foodID || foodID === undefined) {
        throw new Error('id is not found');
      }
      const food = await Food.findOne({ _id: foodID });
      if (food) {
        return food;
      }
      throw new Error('food not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceAddMoreFood: async (foodData) => {
    try {
      if (!Array.isArray(foodData)) {
        throw new Error('foodData is not an array');
      }
      const newFoodsData = foodData.filter((foodData) => !foodData.id);
      const foods = await Food.insertMany(newFoodsData);
      return foods;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceAddLocation: async (data) => {
    try {
      if (!data.id) {
        const newLocation = new Location({ ...data });
        return await newLocation.save();
      } else {
        const location = await Location.findOne({ _id: data.id });
        if (location) {
          throw new Error('location already exist!');
        }
        const newLocation = new Location({ ...data });
        return await newLocation.save();
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceDeleteLocation: async (locationID) => {
    try {
      if (!locationID || locationID === undefined) {
        throw new Error('id is not found');
      }
      const location = await Location.findOne({ _id: locationID });
      if (location) {
        return await Location.deleteOne({ _id: locationID });
      }
      throw new Error('location not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceUpdateLocation: async (data) => {
    try {
      if (!data.id || data.id === undefined) {
        throw new Error('id is not found');
      }
      const location = await Location.findOne({ _id: data.id });
      if (location) {
        return await Location.updateOne({ _id: data.id }, data);
      }
      throw new Error('location not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceGetAllLocation: async (locationID) => {
    try {
      if (!locationID || locationID === undefined) {
        throw new Error('id is not found');
      }
      const location = await Location.find();
      if (location) {
        return location;
      }
      throw new Error('location not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceGetLocation: async (locationID) => {
    try {
      if (!locationID || locationID === undefined) {
        throw new Error('id is not found');
      }
      const location = await Location.findOne({ _id: locationID });
      if (location) {
        return location;
      }
      throw new Error('location not found');
    } catch (error) {
      throw new Error(error.message);
    }
  },
  handleServiceAddMoreLocations: async (locations) => {
    try {
      if (Array.isArray(locations)) {
        const newLocations = locations.filter((location) => !locations.id);
        const locationData = await Location.insertMany(newLocations);
        if (locationData) {
          return locationData;
        }
        throw new Error('location not found');
      }
      throw new Error('locations is not an array');
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
module.exports = crud;
