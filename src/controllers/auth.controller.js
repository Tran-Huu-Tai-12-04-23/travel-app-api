const authService = require('../services/auth.service');

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      loginData = await authService.login({ username, password });
      return res.json(loginData);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
  loginWithGoogle: async (req, res) => {
    // uid when login with , handle auto register new account for this google account
    //
    try {
      const loginData = await authService.loginWithGoogle(req.body);
      return res.json(loginData);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
  register: async (req, res) => {
    try {
      const user = await authService.register(req.body);
      if (user) {
        res.json(user);
      } else {
        return res.status(400).json({ message: 'Register failed!' });
      }
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};

module.exports = authController;
