import { useState } from "react";

export default function ExerciseList({
  exercises,
  loading,
  error,
  lastExerciseElementRef,
  editableList = false,
  handleShowExerciseForm,
  handleDeleteCustomExercise,
}) {
  const [expandedExerciseIndex, setExpandedExerciseIndex] = useState(null);

  const handleToggleDetails = (index) => {
    setExpandedExerciseIndex(index === expandedExerciseIndex ? null : index);
  };

  return (
    <div className="exercise-list">
      {!editableList ? (
        <>
          {exercises.map((exercise, index) => {
            const moreDetailsShown = expandedExerciseIndex === index;
            const exerciseRef =
              index === exercises.length - 1 ? lastExerciseElementRef : null;

            return (
              <div key={index} ref={exerciseRef} className="exercise">
                {moreDetailsShown ? (
                  <div className="exercise-more-details">
                    <h6>{exercise.name}</h6>
                    <p>Description/Instructions: {exercise.description}</p>
                    <button onClick={() => handleToggleDetails(index)}>
                      See Previous Details
                    </button>
                    <button>Add to Workout</button>
                  </div>
                ) : (
                  <div className="exercise-main-details">
                    <h6>{exercise.name}</h6>
                    <p>Body Part: {exercise.bodyPart}</p>
                    <p>Target: {exercise.target}</p>
                    <p>Equipment: {exercise.equipment}</p>
                    <button onClick={() => handleToggleDetails(index)}>
                      See Instructions
                    </button>
                    <button>Add to Workout</button>
                  </div>
                )}
              </div>
            );
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
            const moreDetailsShown = expandedExerciseIndex === index;
            const exerciseRef =
              index === exercises.length - 1 ? lastExerciseElementRef : null;

            return (
              <div key={index} ref={exerciseRef} className="exercise">
                {moreDetailsShown ? (
                  <div className="exercise-more-details">
                    <h6>{exercise.exercise.name}</h6>
                    <p>{exercise.description}</p>
                    <button onClick={() => handleToggleDetails(index)}>
                      See Previous Details
                    </button>
                    <button>Edit</button>
                    <button
                      type="button"
                      onClick={() => handleDeleteCustomExercise(index)}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <div className="exercise-main-details">
                    <h6>{exercise.exercise.name}</h6>
                    <p>
                      Body Part:
                      {exercise.exercise.bodyPart}
                    </p>
                    <p>Target: {exercise.exercise.target}</p>
                    <p>
                      Equipment:
                      {exercise.exercise.equipment}
                    </p>
                    <p>Sets: {exercise.setQty}</p>
                    <p>Reps: {exercise.repQty}</p>
                    <p>Weight: {exercise.weight}</p>
                    <button onClick={() => handleToggleDetails(index)}>
                      See Instructions
                    </button>
                    <button>Edit</button>
                    <button
                      type="button"
                      onClick={() => handleDeleteCustomExercise(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            );
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
