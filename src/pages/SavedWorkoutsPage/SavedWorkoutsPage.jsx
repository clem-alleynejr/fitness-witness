import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SavedWorkoutsPage.css";
import WorkoutList from "../../components/WorkoutList/WorkoutList";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";
import * as workoutsAPI from "../../services/workouts-api";

export default function SavedWorkoutsPage({
  unsavedWorkout,
  setUnsavedWorkout,
  editWorkout,
  setEditWorkout,
}) {
  const [workouts, setWorkouts] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getWorkouts() {
      const workouts = await workoutsAPI.getAll();
      setWorkouts(workouts);
      setActiveWorkout(null);
    }
    getWorkouts();
  }, []);

  async function handleDeleteWorkout(workoutId) {
    const updatedWorkoutList = await workoutsAPI.deleteSavedWorkout(workoutId);
    setWorkouts(updatedWorkoutList);
    setActiveWorkout(null);
  }

  async function handleEditworkout(workoutId, newWorkoutName) {
    const updatedWorkout = await workoutsAPI.editWorkout(workoutId);
    const updatedWorkoutsArray = workouts.map((workout) =>
      workout._id === workoutId ? updatedWorkout : workout
    );
    setWorkouts(updatedWorkoutsArray);
    setActiveWorkout(updatedWorkout);
  }

  async function handleChangeWorkoutName(workoutId, newWorkoutName) {
    const updatedUnsavedWorkout = await workoutsAPI.setWorkoutName(
      workoutId,
      newWorkoutName
    );
    setUnsavedWorkout(updatedUnsavedWorkout);
  }

  async function handleChangeSetQty(exerciseId, newSetQty) {
    const updatedUnsavedWorkout =
      await workoutsAPI.setExerciseSetQtyInUnsavedWorkout(
        exerciseId,
        newSetQty
      );
    setUnsavedWorkout(updatedUnsavedWorkout);
  }

  async function handleChangeRepQty(exerciseId, newRepQty) {
    const updatedUnsavedWorkout =
      await workoutsAPI.setExerciseRepQtyInUnsavedWorkout(
        exerciseId,
        newRepQty
      );
    setUnsavedWorkout(updatedUnsavedWorkout);
  }

  async function handleSaveUnsavedWorkout() {
    const savedWorkout = await workoutsAPI.saveUnsavedWorkout();
    setActiveWorkout(savedWorkout);
    const updatedWorkoutsArray = workouts.map((workout) =>
      workout._id === activeWorkout._id ? savedWorkout : workout
    );
    setWorkouts(updatedWorkoutsArray);
    setEditWorkout(false);
    navigate("/workouts");
  }

  return (
    <main className="SavedWorkoutsPage">
      <h1 className="SavedWorkout">My Workouts</h1>

      <div className="WorkoutList">
        <br />
        {/* Render WorkoutList components */}
        <WorkoutList
          workouts={workouts}
          activeWorkout={activeWorkout}
          setActiveWorkout={setActiveWorkout}
        />
      </div>

      {workouts ? (
        <WorkoutDetail
          workout={activeWorkout}
          handleDeleteWorkout={handleDeleteWorkout}
          handleEditWorkout={handleEditworkout}
          handleChangeWorkoutName={handleChangeWorkoutName}
          handleChangeSetQty={handleChangeSetQty}
          handleChangeRepQty={handleChangeRepQty}
          handleSaveUnsavedWorkout={handleSaveUnsavedWorkout}
          editWorkout={editWorkout}
          setEditWorkout={setEditWorkout}
          workouts={workouts}
        />
      ) : (
        <p></p>
      )}
    </main>
  );
}
