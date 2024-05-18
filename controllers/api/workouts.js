const Workout = require("../../models/workout");

module.exports = {
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

