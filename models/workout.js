const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { exerciseSchema } = require('./exercise')

// const exerciseChoiceSchema = new Schema({
//     // sets and reps will be strings to allow users to input range (ex. '8-10')
//     setQty: { type: String, default: '' },
//     repQty: { type: String, default: '' },
//     exercise: exerciseSchema
// }, {
//     timestamps: true
// })

const workoutSchema =  new Schema({
    name: { type: String, default: '' },
    exercises: [exerciseSchema]
}, {
    timestamps: true
})

// workoutSchema.statics.getUnsavedWorkout = function(userId) {
//     return this.findOneAndUpdate(
//         { user: userId, isSaved: false },
//         { user: userId },
//         { upsert: true, new: true }
//     )
// }

// workoutSchema.methods.addExerciseToUnsavedWorkout = async function(exerciseId) {
//     const unsavedWorkout = this;
//     const exerciseChoice = unsavedWorkout.exerciseChoices.find(exerciseChoice => exerciseChoice.exercise._id.equals(exerciseId));
//     if (exerciseChoice) {
//         return;
//     } else {
//         const Exercise = mongoose.model('Exercise');
//         const exercise = await Exercise.findById(exerciseId);
//         unsavedWorkout.exerciseChoices.push({exercise});
//     }
//     return unsavedWorkout.save();
// }

// workoutSchema.methods.setWorkoutName= function(workoutId, newWorkoutName) {
//     const unsavedWorkout = this;
//     this.name = newWorkoutName
//     return unsavedWorkout.save()
// }

// workoutSchema.methods.setSetQty = function(exerciseId, newSetQty) {
//     const unsavedWorkout = this;
//     const exerciseChoice = unsavedWorkout.exerciseChoices.find(exerciseChoice => exerciseChoice.exercise._id.equals(exerciseId))
//     exerciseChoice.setQty = newSetQty
//     return unsavedWorkout.save()
// }

// workoutSchema.methods.setRepQty = function(exerciseId, newRepQty) {
//     const unsavedWorkout = this;
//     const exerciseChoice = unsavedWorkout.exerciseChoices.find(exerciseChoice => exerciseChoice.exercise._id.equals(exerciseId))
//     exerciseChoice.repQty = newRepQty
//     return unsavedWorkout.save()
// }


module.exports.workoutSchema = workoutSchema

module.exports.Workout = mongoose.model('Workout', workoutSchema)
