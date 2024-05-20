export default function ExerciseList({
    exercises,
    loading,
    error,
    lastExerciseElementRef
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
                            <p>Body Part: {exercise.bodyPart}</p>
                            <p>Target: {exercise.target}</p>
                            <p>Equipment: {exercise.equipment}</p>
                            {/* For Exercise Selector */}
                            <button>See More Details</button>
                            <button>Add to Workout</button>
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className="exercise">
                            <h6>{exercise.name}</h6>
                            <p>Body Part: {exercise.bodyPart}</p>
                            <p>Target: {exercise.target}</p>
                            <p>Equipment: {exercise.equipment}</p>
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
