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
    const userID = req.user._id
  try {
    const workouts = await Workout.find({userID: userID});
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retreive workouts" });
  }
}

async function show(req, res) {
  const id = req.params.id;
  const userID = req.user._id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Workout ID is not valid");
    }
    const workout = await Workout.find({ _id: id, userID: userID });
    if (!workout) {
      throw new Error("Workout not found");
    }
    res.json(workout);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req, res) {
  const userID = req.user._id;
  const { name, exercises } = req.body;
  try {
    // Create new workout
    const newWorkout = await Workout.create({ name, exercises, userID });

    res.json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: "Failed to create workout" });
  }
}

async function update(req, res) {
  const id = req.params.id;
  const userID = req.user._id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Workout ID is not valid");
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id, userID: userID },
      { ...req.body }
    );
    if (!workout) {
      throw new Error("Workout not found");
    }
    res.json(workout);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteWorkout(req, res) {
  const id = req.params.id;
  const userID = req.user._id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Workout ID is not valid");
    }
    const workout = await Workout.findOneAndDelete({ _id: id, userID: userID });
    if (!workout) {
      throw new Error("Workout not found");
    }
    res.json(workout);
  } catch (error) {
    res.status(400).json(error);
  }
}

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
