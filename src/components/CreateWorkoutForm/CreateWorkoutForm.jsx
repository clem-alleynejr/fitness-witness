import React from "react";
import ExerciseList from "../ExerciseList/ExerciseList";
import * as WorkoutsAPI from "../../services/workouts-api";
import { useNavigate } from "react-router-dom";


export default function CreateWorkoutForm({
    workoutName,
    setWorkoutName,
    workoutDescription,
    setWorkoutDescription,
    exerciseSelections,
    showExerciseForm,
    setShowExerciseForm,
    handleShowExerciseForm,
}) {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await WorkoutsAPI.addWorkout({
                name: workoutName,
                description: workoutDescription,
                exercises: exerciseSelections,
            });
            console.log("Workout saved:", response.data);
            navigate('/workouts');
        } catch (error) {
            console.error("Error saving workout:", error);
        }
    };

    return (
        <form className="new-workout-form" onSubmit={handleSubmit}>
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
                    {!showExerciseForm && (
                        <ExerciseList
                            exercises={exerciseSelections}
                            editableList={true}
                            handleShowExerciseForm={handleShowExerciseForm}
                        />
                    )}
                </>
            )}
            {!showExerciseForm && (
                <div>
                    <button className="save-button">Save Workout</button>
                </div>
            )}
        </form>
    );
}
