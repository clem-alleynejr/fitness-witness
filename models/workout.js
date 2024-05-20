const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { exerciseSchema } = require('./exercise');

const userExerciseSchema = new Schema({
    exercise: exerciseSchema,
    description: { type: String, default: '' },
    setQty: { type: String, default: '' },
    repQty: { type: String, default: '' },
}, {
    timestamps: true
})

const workoutSchema = new Schema({
    name: { type: String, default: '' },
    description: { type: String, default: ''},
    exercises: [userExerciseSchema],
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Workout', workoutSchema);
