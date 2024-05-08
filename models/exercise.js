const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema =  new Schema({
    setQty: { type: String, default: '' },
    repQty: { type: String, default: '' },
    name: { type: String, required: true },
}, {
    timestamps: true
});

module.exports.exerciseSchema = exerciseSchema;

module.exports.Exercise = mongoose.model('Exercise', exerciseSchema);