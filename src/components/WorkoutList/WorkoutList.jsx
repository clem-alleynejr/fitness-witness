import './WorkoutList.css';
import WorkoutCard from '../WorkoutCard/WorkoutCard';

export default function WorkoutList({ workouts, activeWorkout, setActiveWorkout }) {
  const workoutCards = workouts.map(w =>
    <WorkoutCard
      key={w._id}
      workout={w}
      activeWorkout={activeWorkout}
      setActiveWorkout={setActiveWorkout}
    />
  );

  return (
    <main className="WorkoutList">
      {workoutCards}
    </main>
  );
}