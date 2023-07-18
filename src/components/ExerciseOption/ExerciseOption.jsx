import './ExerciseOption.css';

export default function ExerciseOption({ exercise, handleAddToWorkout }) {
    const capitalizeWords = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const capitalizedExerciseName = capitalizeWords(exercise.name);
    const capitalizedExerciseTarget = capitalizeWords(exercise.target);
    const capitalizedExerciseEquipment = capitalizeWords(exercise.equipment);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{capitalizedExerciseName}</h5>
                <p className="target">Target: {capitalizedExerciseTarget}</p>
                <p className="equipment">Equipment: {capitalizedExerciseEquipment}</p>
                <button className="btn-sm" onClick={() => handleAddToWorkout(exercise._id)}>
                    Add To Workout
                </button>
            </div>
        </div>
    );
}
