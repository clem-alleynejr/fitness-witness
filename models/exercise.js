const mongoose = require('mongoose');

const exerciseSchema = require('./exerciseSchema');


module.exports = mongoose.model('Exercise', exerciseSchema);