const Workout = require('../../models/workout');
// const Item = require('../../models/item');

module.exports = {
    unsavedWorkout,
    addToUnsavedWorkout,
    saveUnsavedWorkout,
    setSetQtyInUnsavedWorkout,
    setRepQtyInUnsavedWorkout
};


async function unsavedWorkout(req, res) {
    const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
    res.json(unsavedWorkout);
}

// Add an exercise to the unsaved workout
async function addToUnsavedWorkout(req, res) {
    const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
    await unsavedWorkout.addExerciseToUnsavedWorkout(req.params.id);
    res.json(unsavedWorkout);
}

// Updates the unsaved Workout's isSaved property to true (turning it into a saved workout)
async function saveUnsavedWorkout(req, res) {
    const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
    unsavedWorkout.isSaved = true;
    await unsavedWorkout.save();
    res.json(unsavedWorkout)
}

// Update the exercise's number of sets in the unsaved workout
async function setSetQtyInUnsavedWorkout(req, res) {
    const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
    await unsavedWorkout.setSetQty(req.body.exerciseId, req.body.newSetQty);
    res.json(unsavedWorkout)
}

// Update the exercise's number of reps in the unsaved workout
async function setRepQtyInUnsavedWorkout(req, res) {
    const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
    await unsavedWorkout.setRepQty(req.body.exerciseId, req.body.newRepQty);
    res.json(unsavedWorkout)
}