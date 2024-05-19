export default function ExerciseList({
    exercises,
    loading,
    error,
    lastExerciseElementRef,
    setQty,
    repQty,
}) {
    return (
        <div className="exercise-list">
            <div className="add-exercise-circular-button">
            <button>+</button>
            <p>Add Exercise</p>
            </div>
            {exercises.map((exercise, index) => {
                if (index === exercises.length - 1) {
                    return (
                        <div
                            key={index}
                            ref={lastExerciseElementRef}
                            className="exercise"
                        >
                            <h6>{exercise.name}</h6>
                            <p>Target: {exercise.bodyPart}</p>
                            <p>Equipment: {exercise.equipment}</p>
                            {setQty && <p>Sets: {exercise.setQty}</p>}
                            {repQty && <p>Reps: {exercise.repQty}</p>}
                            {/* For Exercise Selector */}
                            <button>See More Details</button>
                            <button>Add to Workout</button>
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className="exercise">
                            <h6>{exercise.name}</h6>
                            <p>Target: {exercise.bodyPart}</p>
                            <p>Equipment: {exercise.equipment}</p>
                            {setQty && <p>Sets: {exercise.setQty}</p>}
                            {repQty && <p>Reps: {exercise.repQty}</p>}
                            {/* For Exercise Selector */}
                            <button>See More Details</button>
                            <button>Add to Workout</button>
                        </div>
                    );
                }
            })}
            {loading && <div
                className='loading'>
                    <p>Loading...</p>
                    </div>}
            
            {error && <div className="error">
                <p>Error Fetching Exercises</p>
                </div>}

        </div>
    );
}
