const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema =  new Schema({
    title: {
        type: String,
        required: true
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise',
        required: true
    }],
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)