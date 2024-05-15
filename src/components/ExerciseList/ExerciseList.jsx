export default function ExerciseList({exercises, setQty, repQty }) {
    return (
        <div className="exercise-list">
        {/* {exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <h3>{exercise.name}</h3>
            {setQty && <p>Sets: {exercise.setQty}</p>}
            {repQty && <p>Reps: {exercise.repQty}</p>}
          </div>
        ))} */}
      </div>
    );
}