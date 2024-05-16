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

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = {
    Exercise,
    exerciseSchema: exerciseSchema
}
