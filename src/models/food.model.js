const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema({
   id: {
      type: String,
      required: false,
   },
   name: {
      type: String,
      required: true,
   },
   label: {
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
   rangePrice: {
      type: [Number],
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
});

const Food = mongoose.model('Food', foodSchema);
foodSchema.index({ coordinates: '2dsphere' });

module.exports = Food;
