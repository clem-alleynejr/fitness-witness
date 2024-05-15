export default function ExerciseList({exercises, setQty, repQty }) {
    return (
        <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <h6>{exercise.name}</h6>
            <p>Target: {exercise.bodyPart}</p>
            <p>Equipment: {exercise.equipment}</p>
            {setQty && <p>Sets: {exercise.setQty}</p>}
            {repQty && <p>Reps: {exercise.repQty}</p>}
            <button>See More Details</button>
            <button>Add to Workout</button>
          </div>
        ))}
      </div>
    );
}