import './WorkoutCard.css';

export default function WorkoutCard({ workout, activeWorkout, setActiveWorkout }) {
    return (
        <div
            className={`WorkoutCard ${workout === activeWorkout ? 'selected' : ''}`}
            onClick={() => setActiveWorkout(workout)}
        >
            <div className="id">{workout.name}</div>
        </div>
    )
}