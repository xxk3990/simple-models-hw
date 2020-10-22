const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },

});

DogSchema.statics.findDogByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
