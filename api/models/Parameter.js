const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Parameter = new Schema({
  parameter: {type: Number},
},{
    collection: 'parameter'
});

module.exports = mongoose.model('Parameter', Parameter);