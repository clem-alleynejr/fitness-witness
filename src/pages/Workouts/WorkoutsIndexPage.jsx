import "./WorkoutsIndexPage.css";
import { useEffect, useState } from "react";
import * as workoutsAPI from "../../services/workouts-api";
import WorkoutList from "../../components/WorkoutList/WorkoutList";

export default function WorkoutsIndexPage() {
  const [workouts, setWorkouts] = useState(null);

  // Gets all user workouts
  useEffect(function () {
    async function getWorkouts() {
      const workouts = await workoutsAPI.getAll();
      setWorkouts(workouts);
    }
    getWorkouts();
  }, []);

  return (
    <div className="workouts-index-page">
      <h1 className="page-title">My Workouts</h1>
      <WorkoutList workouts={workouts} />
    </div>
  );
}
