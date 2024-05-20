import React from "react";

export default function CreateExerciseForm() {
    return (
        <form className="new-exercise-form">
            <h3>Create Custom Exercise</h3>
            <label>Exercise Name:</label>
            <input></input>
            <div className="body-part-and-target">
                <div className="body-part">
                    <label>Body Part:</label>
                    <input></input>
                </div>
                <div className="target">
                    <label>Target:</label>
                    <input></input>
                </div>
            </div>
            <label>Equipment:</label>
            <input></input>
            <label>Description:</label>
            <input></input>
            <div className="sets-and-reps">
                <div className="sets">
                    <label>Sets:</label>
                    <input></input>
                </div>
                <div className="reps">
                    <label>Reps:</label>
                    <input></input>
                </div>
            </div>
            <button>Create Exercise and Add to Workout</button>
        </form>
    );
}
