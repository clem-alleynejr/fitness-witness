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
        <div className="list-group">
            <h6>Select Saved Workout to View Details:</h6>
            {workoutCards}
        </div>
    );
}