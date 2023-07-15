const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = require('./exerciseSchema')

const exerciseChoiceSchema = new Schema({
    // sets and reps will be strings to allow users to input range (ex. '8-10')
    setQty: { type: String, default: '' },
    repQty: { type: String, default: '' },
    exercise: exerciseSchema
}, {
    timestamps: true
})

const workoutSchema =  new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    exerciseChoices: [exerciseChoiceSchema],
    isSaved: { type: Boolean, default: false },
}, {
    timestamps: true
})


workoutSchema.statics.getUnsavedWorkout = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isSaved: false },
        { user: userId },
        { upsert: true, new: true }
    )
}

module.exports = mongoose.model('Workout', workoutSchema)
