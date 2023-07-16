import './WorkoutList.css';
import WorkoutCard from '../WorkoutCard/WorkoutCard';

export default function WorkoutList({ workouts }) {
  const workoutCards = workouts.map(w =>
    <WorkoutCard
      key={w._id}
      workout={w}
    />
  );

  return (
    <main className="WorkoutList">
      {workoutCards}
    </main>
  );
}