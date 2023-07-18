import './WorkoutCard.css';

export default function WorkoutCard({ workout, activeWorkout, setActiveWorkout }) {
    return (
        <a
            className={workout === activeWorkout ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}
            aria-current={activeWorkout ? 'true' : 'false'}
            onClick={() => setActiveWorkout(workout)}
        >
           {workout.name}
        </a>
    )
}