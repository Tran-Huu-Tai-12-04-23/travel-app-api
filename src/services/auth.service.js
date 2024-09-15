const User = require('../models/user.model');
const jwtService = require('./jwt.service');
const bcrypt = require('bcrypt');

const AuthService = {
  login: async (userData) => {
    try {
      const { username, password } = userData;
      const user = await User.findOne({ username: username });
      if (!user) {
        throw new Error('User not found!');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error('Incorrect password');
      }

      // update last time login
      user.lastLoginTime = new Date();
      await user.save();
      const token = jwtService.generateTokens(user);
      return { user, token };
    } catch (err) {
      throw err;
    }
  },

  loginWithGoogle: async (userData) => {
    try {
      const { username } = userData;
      let user = await User.findOne({ username: username });
      if (!user) {
        // register new account here
        //user = ....
        user = await this.register(userData);
      }

      const token = jwtService.generateTokens(user);
      return { user, token };
    } catch (err) {
      throw err;
    }
  },
  register: async (userData) => {
    try {
      const { username, password } = userData;
      let user = await User.findOne({ username: username });

      if (user) {
        throw new Error('Account already exist!');
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ ...userData, password: hashedPassword });
      return await newUser.save();
    } catch (err) {
      throw err;
    }
  },
};

module.exports = AuthService;
