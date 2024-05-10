import "./WorkoutsIndexPage.css";
import { useEffect, useState } from "react";
import { Link, Routes } from "react-router-dom";
import * as workoutsAPI from "../../services/workouts-api";
import WorkoutList from "../../components/WorkoutList/WorkoutList";

export default function WorkoutsIndexPage() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(function () {
    async function getWorkouts() {
      const workouts = await workoutsAPI.getAll();
      setWorkouts(workouts);
      // setActiveWorkout(null);
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
