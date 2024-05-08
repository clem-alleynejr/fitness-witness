const Schema = require('mongoose').Schema;

const exerciseSchema =  new Schema({
    setQty: { type: String, default: '' },
    repQty: { type: String, default: '' },
    name: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', exerciseSchema);