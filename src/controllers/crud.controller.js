const crudService = require('../services/crud.service');
const crudController = {
  handleAddFood: async (req, res) => {
    try {
      const foodData = req.body;
      const resultData = await crudService.handleServiceAddFood(foodData);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Adding food successfully',
          data: resultData,
        });
      }
      return res.status(400).json({ message: 'Adding food fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleUpdateFood: async (req, res) => {
    try {
      const foodData = req.body;
      const resultData = await crudService.handleServiceUpdateFood(foodData);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Updating food successfully',
          data: resultData,
        });
      }
      return res.status(400).json({ message: 'Updating food fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleDeleteFood: async (req, res) => {
    try {
      const foodID = req.query.id;
      const resultData = await crudService.handleServiceDeleteFood(foodID);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Deleting food successfully',
        });
      }
      return res.status(400).json({ message: 'Deleting food fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ messsage: error.message, errCode: 1 });
    }
  },
  handleGetAllFood: async (req, res) => {
    try {
      const foodID = req.query.id;
      if (foodID === 'all') {
        const resultData = await crudService.handleServiceGetAllFood(foodID);
        if (resultData) {
          return res.status(200).json({
            errCode: 0,
            message: 'Getting all food successfully',
            data: resultData,
          });
        }
        return res.status(400).json({ message: 'Getting all food not found', errCode: 1 });
      }
      return res.status(400).json({ message: 'id food not found', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleGetFood: async (req, res) => {
    try {
      const foodID = req.query.id;
      if (foodID) {
        const resultData = await crudService.handleServiceGetFood(foodID);
        if (resultData) {
          return res.status(200).json({
            errCode: 0,
            message: 'Getting food successfully',
            data: resultData,
          });
        }
        return res.status(400).json({ message: 'Getting food not found', errCode: 1 });
      }
      return res.status(400).json({ message: 'id food not found', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
};

module.exports = crudController;
