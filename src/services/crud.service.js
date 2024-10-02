const Food = require('../models/food.model');

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
      console.log('food', food);
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
};
module.exports = crud;
