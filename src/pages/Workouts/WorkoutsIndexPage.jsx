import './WorkoutsIndexPage.css'
import { useEffect, useState } from "react";
import { Link, Routes } from "react-router-dom";
import * as workoutsAPI from "../../services/workouts-api";

export default function WorkoutsIndexPage() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(function() {
    async function getWorkouts() {
      const workouts = await workoutsAPI.getAll();
      setWorkouts(workouts);
      // setActiveWorkout(null);
    }
    getWorkouts();
  }, []);

  return (
    <div className="workouts-index-page">
      <h1>My Workouts</h1>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <Link to={`/workouts/${workout._id}`}></Link>
          <h4 key={workout._id}>{workout.name}</h4>
        ))}
      </div>
    </div>
  );
}
