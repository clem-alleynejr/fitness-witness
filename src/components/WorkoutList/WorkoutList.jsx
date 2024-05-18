import './WorkoutList.css';
import { Link } from "react-router-dom";

export default function WorkoutList({ workouts }) {
  return (
    <div className="workout-list">
      {workouts &&
        workouts.map((workout) => (
          <Link
            to={`/workouts/${workout._id}`}
            key={workout._id}
            className="workout"
          >
            {workout.name}
            <p>{workout.description}</p>
          </Link>
        ))}
    </div>
  );
}
