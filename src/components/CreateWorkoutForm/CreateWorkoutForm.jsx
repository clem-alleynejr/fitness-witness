import React from 'react'
import ExerciseList from '../ExerciseList/ExerciseList'

export default function CreateWorkoutForm({
    workoutName,
    setWorkoutName,
    workoutDescription,
    setWorkoutDescription,
    exerciseSelections,
    showExerciseForm,
    setShowExerciseForm,
    handleShowExerciseForm
}) {
  return (
    <form className="new-workout-form">
                    <label>Workout Name:</label>
                    <input
                        type="text"
                        placeholder="Ex. Chest Day, Leg Day, etc."
                        className="workout-name"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                        required
                    />
                    <label>Description:</label>
                    <input
                        type="text"
                        placeholder="Ex. Intense Chest Workout"
                        className="workout-description"
                        value={workoutDescription}
                        onChange={(e) => setWorkoutDescription(e.target.value)}
                    />
                    {exerciseSelections.length === 0 && !showExerciseForm ? (
                            <div className="motivation">
                                <button
                                    type="button"
                                    onClick={() => setShowExerciseForm(true)}
                                >
                                    Add Custom Exercise
                                </button>
                                <p>Yesterday, you said tomorrow. So</p>
                                <img
                                    src="https://media.tenor.com/kA8khAUYJZ8AAAAC/shia-labeouf.gif"
                                    alt="JUST DO IT"
                                />
                            </div>
                    ) : (
                        <>
                        {!showExerciseForm && 
                            <ExerciseList 
                            exercises={exerciseSelections} editableList={true}
                            handleShowExerciseForm={
                                handleShowExerciseForm
                            } 
                            />}
                        </>
                    )}
                    {!showExerciseForm && <div>
                        <button className="save-button">Save Workout</button>
                    </div>}
                </form>
  )
}
