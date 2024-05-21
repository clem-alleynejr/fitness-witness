const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
    bodyPart: {type: String, default: ''},
    equipment: {type: String, default: ''},
    gifUrl: {type: String, default: ''},
    name: {
        type: String, required: true
    },
    target: {type: String, default: ''}
}, {
    timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = {
    Exercise,
    exerciseSchema: exerciseSchema
}
