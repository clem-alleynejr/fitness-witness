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
        const unsavedWorkout = await Workout.unsavedWorkout(req.user._id);
        res.json(unsavedWorkout);
}

// Add an exercise to the unsaved workout
async function addToUnsavedWorkout(req, res) {

}

// Updates the unsaved Workout's isSaved property to true (turning it into a saved workout)
async function saveUnsavedWorkout(req, res) {
}

// Update the exercise's number of sets in the unsaved workout
async function setSetQtyInUnsavedWorkout(req, res) {

}

// Update the exercise's number of reps in the unsaved workout
async function setRepQtyInUnsavedWorkout(req, res) {

}