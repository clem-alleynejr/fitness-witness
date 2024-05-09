import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import * as workoutsAPI from "../../services/workouts-api";

export default function WorkoutsIndexPage() {
  const [workouts, setWorkouts] = useState(null);

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch("/api/workouts");
  //     const workouts = await response.json();

  //     if (response.ok) {
  //       setWorkouts(workouts);
  //     }
  //   };

  //   fetchWorkouts();
  // }, []);

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
          <h3 key={workout._id}></h3>
        ))}
      </div>
    </div>
  );
}
