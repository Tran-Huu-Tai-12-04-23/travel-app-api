const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
   id: {
      type: String,
      required: false,
   },
   name: {
      type: String,
      required: true,
   },
   coordinates: {
      type: {
         type: String,
         enum: ['Point'],
         required: true,
      },
      coordinates: {
         type: [Number],
         required: true,
      },
   },
   lstImgs: {
      type: [String],
      required: true,
   },
   address: {
      type: String,
      default: null,
   },
   description: {
      type: String,
      default: null,
   },
   label: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const Location = mongoose.model('Location', locationSchema);
// locationSchema.index({ coordinates: '2dsphere' });
module.exports = Location;
