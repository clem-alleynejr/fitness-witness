import "./AllWorkoutsPage.css";
import { useEffect, useState } from "react";
import * as workoutsAPI from "../../services/workouts-api";
import WorkoutList from "../../components/WorkoutList/WorkoutList";

export default function AllWorkoutsPage() {
  const [workouts, setWorkouts] = useState(null);

  // Gets all user workouts
  useEffect(function () {
    async function getWorkouts() {
      const workouts = await workoutsAPI.getAll();
      setWorkouts(workouts.reverse());
    }
    getWorkouts();
  }, []);

  return (
    <div className="all-workouts-page">
      <h1 className="page-title">My Workouts</h1>
      <WorkoutList workouts={workouts} />
    </div>
  );
}
