const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema =  new Schema({
    name: { type: String, required: true },
    exerciseInfo: { type: Object},
    setQty: { type: String, default: '' },
    repQty: { type: String, default: '' }
}, {
    timestamps: true
});

module.exports.exerciseSchema = exerciseSchema;

module.exports.Exercise = mongoose.model('Exercise', exerciseSchema);