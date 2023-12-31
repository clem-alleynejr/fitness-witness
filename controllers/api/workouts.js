const Workout = require('../../models/workout');
// const Item = require('../../models/item');

module.exports = {
    unsavedWorkout,
    addToUnsavedWorkout,
    saveUnsavedWorkout,
    setWorkoutName,
    setSetQtyInUnsavedWorkout,
    setRepQtyInUnsavedWorkout,
    index,
    deleteSavedWorkout,
    editWorkout
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

// Update the workout name in the unsaved workout
async function setWorkoutName(req, res) {
    const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
    await unsavedWorkout.setWorkoutName(req.body.workoutId, req.body.newWorkoutName);
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

async function index(req, res) {
    const workouts = await Workout.find({ user: req.user._id }).exec()
    res.json(workouts)
}

async function deleteSavedWorkout(req, res) {
    await Workout.findOneAndDelete({ _id: req.params.id})
    const workouts = await Workout.find({ user: req.user._id }).exec()
    res.json(workouts)
}

async function editWorkout(req, res) {
    const workoutToEdit = await Workout.findOne({ _id: req.body.workoutId })
    workoutToEdit.isSaved = false;
    console.log(workoutToEdit)
    await workoutToEdit.save();
    res.json(workoutToEdit)
}