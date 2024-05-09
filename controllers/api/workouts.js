const Workout = require("../../models/workout");
const User = require("../../models/user");

module.exports = {
  // unsavedWorkout,
  // addToUnsavedWorkout,
  // saveUnsavedWorkout,
  // setWorkoutName,
  // setSetQtyInUnsavedWorkout,
  // setRepQtyInUnsavedWorkout,
  // deleteSavedWorkout,
  // editWorkout,
  index,
  show,
  create,
  update,
  delete: deleteWorkout,
};

async function index(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const workouts = user.workouts;
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retreive workouts" });
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const workout = await Workout.findById(id);
    res.json(workout);
  } catch {
    res.status(500).json({ message: "Workout not found" });
  }
}

async function create(req, res) {
  try {
    const user = await User.findById(req.user._id);
    const { name, exercises } = req.body;

    // Create new workout
    const newWorkout = await Workout.create({ name, exercises });

    // Add new workout to logged-in user's workouts
    user.workouts.push(newWorkout);
    await user.save();

    res.json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: "Failed to create workout" });
  }
}

function update(req, res) {}

function deleteWorkout(req, res) {}

// async function unsavedWorkout(req, res) {
//     const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
//     res.json(unsavedWorkout);
// }

// // Add an exercise to the unsaved workout
// async function addToUnsavedWorkout(req, res) {
//     const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
//     await unsavedWorkout.addExerciseToUnsavedWorkout(req.params.id);
//     res.json(unsavedWorkout);
// }

// // Updates the unsaved Workout's isSaved property to true (turning it into a saved workout)
// async function saveUnsavedWorkout(req, res) {
//     const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
//     unsavedWorkout.isSaved = true;
//     await unsavedWorkout.save();
//     res.json(unsavedWorkout)
// }

// // Update the workout name in the unsaved workout
// async function setWorkoutName(req, res) {
//     const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
//     await unsavedWorkout.setWorkoutName(req.body.workoutId, req.body.newWorkoutName);
//     res.json(unsavedWorkout)
// }

// // Update the exercise's number of sets in the unsaved workout
// async function setSetQtyInUnsavedWorkout(req, res) {
//     const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
//     await unsavedWorkout.setSetQty(req.body.exerciseId, req.body.newSetQty);
//     res.json(unsavedWorkout)
// }

// // Update the exercise's number of reps in the unsaved workout
// async function setRepQtyInUnsavedWorkout(req, res) {
//     const unsavedWorkout = await Workout.getUnsavedWorkout(req.user._id);
//     await unsavedWorkout.setRepQty(req.body.exerciseId, req.body.newRepQty);
//     res.json(unsavedWorkout)
// }

// async function deleteSavedWorkout(req, res) {
//     await Workout.findOneAndDelete({ _id: req.params.id})
//     const workouts = await Workout.find({ user: req.user._id }).exec()
//     res.json(workouts)
// }

// async function editWorkout(req, res) {
//     const workoutToEdit = await Workout.findOne({ _id: req.body.workoutId })
//     workoutToEdit.isSaved = false;
//     console.log(workoutToEdit)
//     await workoutToEdit.save();
//     res.json(workoutToEdit)
// }
