const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   id: {
      type: String,
      required: false,
   },
   uid: {
      type: String,
      default: null,
   },
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
   },
   email: {
      type: String,
      default: null,
   },
   displayName: {
      type: String,
      default: null,
   },
   photoURL: {
      type: String,
      default: null,
   },
   createdAt: {
      type: Date,
      default: new Date(),
   },
   lastLoginAt: {
      type: Date,
      default: new Date(),
   },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
