import './WorkoutList.css';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import { Link } from 'react-router-dom'

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
        <>
        <Link to="/workouts/new" className="button btn-sm">Add New Workout</Link>
        <div className="list-group">
            <h6>Select Saved Workout to View Details:</h6>
            {workoutCards}
        </div>
        </>
    );
}