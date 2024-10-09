const crudService = require('../services/api.service');
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
      console.log(foodID);
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
  handleAddMoreFood: async (req, res) => {
    try {
      const foods = req.body;
      const resultData = await crudService.handleServiceAddMoreFood(foods);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Adding more food successfully',
          data: resultData,
        });
      }
      return res.status(400).json({ message: 'Adding more food fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleAddLocation: async (req, res) => {
    try {
      const locationData = req.body;
      const resultData = await crudService.handleServiceAddLocation(locationData);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Adding location successfully',
          data: resultData,
        });
      }
      return res.status(400).json({ message: 'Adding location fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleDeleteLocation: async (req, res) => {
    try {
      const locationID = req.query.id;
      const resultData = await crudService.handleServiceDeleteLocation(locationID);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Deleting location successfully',
        });
      }
      return res.status(400).json({ message: 'Deleting location fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ messsage: error.message, errCode: 1 });
    }
  },
  handleUpdateLocation: async (req, res) => {
    try {
      const locationData = req.body;
      const resultData = await crudService.handleServiceUpdateLocation(locationData);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Updating location successfully',
          data: resultData,
        });
      }
      return res.status(400).json({ message: 'Updating location fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleGetAllLocation: async (req, res) => {
    try {
      const locationID = req.query.id;
      if (locationID === 'all') {
        const resultData = await crudService.handleServiceGetAllLocation(locationID);
        if (resultData) {
          return res.status(200).json({
            errCode: 0,
            message: 'Getting all location successfully',
            data: resultData,
          });
        }
        return res.status(400).json({ message: 'Getting all location not found', errCode: 1 });
      }
      return res.status(400).json({ message: 'id location not found', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleGetLocation: async (req, res) => {
    try {
      const locationID = req.query.id;
      if (locationID) {
        const resultData = await crudService.handleServiceGetLocation(locationID);
        if (resultData) {
          return res.status(200).json({
            errCode: 0,
            message: 'Getting location successfully',
            data: resultData,
          });
        }
        return res.status(400).json({ message: 'Getting location not found', errCode: 1 });
      }
      return res.status(400).json({ message: 'id location not found', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
  handleAddMoreLocation: async (req, res) => {
    try {
      const locations = req.body;
      const resultData = await crudService.handleServiceAddMoreLocations(locations);
      if (resultData) {
        return res.status(200).json({
          errCode: 0,
          message: 'Adding more location successfully',
          data: resultData,
        });
      }
      return res.status(400).json({ message: 'Adding more location fail', errCode: 1 });
    } catch (error) {
      return res.status(400).json({ message: error.message, errCode: 1 });
    }
  },
};

module.exports = crudController;
