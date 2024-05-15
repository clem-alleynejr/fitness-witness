const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
    name: {
        type: String, required: true
    },
    bodyPart: {type: String, default: ''},
    equipment: {type: String, default: ''},
    target: {type: String, default: ''}
}, {
    timestamps: true
})


module.exports = {
    Exercise: mongoose.model('Exercise', exerciseSchema),
    exerciseSchema: exerciseSchema
}
