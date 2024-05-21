export default function ExerciseList({
    exercises,
    loading,
    error,
    lastExerciseElementRef,
    editableList = false,
    handleShowExerciseForm,
    handleDeleteCustomExercise
}) {
    return (
        <div className="exercise-list">
            {!editableList ? (
                <>
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
                                    <button>See More Details</button>
                                    <button>Add to Workout</button>
                                </div>
                            );
                        }
                    })}
                    {loading && (
                        <div className="loading">
                            <p>Loading...</p>
                        </div>
                    )}
                    {error && (
                        <div className="error">
                            <p>Error Fetching Exercises</p>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div
                        className="add-exercise-circular-button"
                        onClick={handleShowExerciseForm}
                    >
                        <button type="button">+</button>
                        <p>Add Custom Exercise</p>
                    </div>
                    {exercises.map((exercise, index) => {
                        if (index === exercises.length - 1) {
                            return (
                                <div
                                    key={index}
                                    ref={lastExerciseElementRef}
                                    className="exercise"
                                >
                                    <h6>{exercise.exercise.name}</h6>
                                    <p>
                                        Body Part: {exercise.exercise.bodyPart}
                                    </p>
                                    <p>Target: {exercise.exercise.target}</p>
                                    <p>
                                        Equipment: {exercise.exercise.equipment}
                                    </p>
                                    <p>Sets: {exercise.setQty}</p>
                                    <p>Reps: {exercise.repQty}</p>
                                    <p>Weight: {exercise.weight}</p>
                                    <button>See More Details</button>
                                    <button>Edit</button>
                                    <button type="button" onClick={() => handleDeleteCustomExercise(index)}>Delete</button>
                                </div>
                            );
                        } else {
                            return (
                                <div key={index} className="exercise">
                                    <h6>{exercise.exercise.name}</h6>
                                    <p>
                                        Body Part: {exercise.exercise.bodyPart}
                                    </p>
                                    <p>Target: {exercise.exercise.target}</p>
                                    <p>
                                        Equipment: {exercise.exercise.equipment}
                                    </p>
                                    <p>Sets: {exercise.setQty}</p>
                                    <p>Reps: {exercise.repQty}</p>
                                    <p>Weight: {exercise.weight}</p>
                                    <button>See More Details</button>
                                    <button>Edit</button>
                                    <button type="button" onClick={() => handleDeleteCustomExercise(index)}>Delete</button>
                                </div>
                            );
                        }
                    })}
                    {loading && (
                        <div className="loading">
                            <p>Loading...</p>
                        </div>
                    )}
                    {error && (
                        <div className="error">
                            <p>Error Fetching Exercises</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
