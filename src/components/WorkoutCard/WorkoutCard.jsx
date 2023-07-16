import './WorkoutCard.css';

export default function WorkoutCard({ workout }) {
    return (
        <div className="WorkoutCard">
            <div className="id">{workout._id}</div>
        </div>
    )
}