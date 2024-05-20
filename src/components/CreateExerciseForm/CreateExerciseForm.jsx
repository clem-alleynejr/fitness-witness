import { faArrowLeft, faShareAltSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function CreateExerciseForm({ handleAddCustomExerciseToWorkout,
    setShowExerciseForm
 }) {
    const [exerciseName, setExerciseName] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [target, setTarget] = useState("");
    const [equipment, setEquipment] = useState("");
    const [description, setDescription] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newExercise = {
            name: exerciseName,
            bodyPart: bodyPart,
            target: target,
            equipment: equipment,
            description: description,
            sets: sets,
            reps: reps,
        };

        handleAddCustomExerciseToWorkout(newExercise);
        setShowExerciseForm(false)

        // // Clear the form inputs after submission
        // setExerciseName("");
        // setBodyPart("");
        // setTarget("");
        // setEquipment("");
        // setDescription("");
        // setSets("");
        // setReps("");
    };

    return (
        <form className="new-exercise-form" onSubmit={handleSubmit}>
            <div className="back-button-and-title">
            <FontAwesomeIcon
            onClick={() => setShowExerciseForm(false)}
            icon={faArrowLeft}
          />
            <h3>Create Custom Exercise</h3>
            </div>
            
            <label>Exercise Name:</label>
            <input
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
            />
            <div className="body-part-and-target">
                <div className="body-part">
                    <label>Body Part:</label>
                    <input
                        value={bodyPart}
                        onChange={(e) => setBodyPart(e.target.value)}
                    />
                </div>
                <div className="target">
                    <label>Target:</label>
                    <input
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                </div>
            </div>
            <label>Equipment:</label>
            <input
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
            />
            <div className="sets-and-reps">
                <div className="sets">
                    <label>Sets:</label>
                    <input
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                    />
                </div>
                <div className="reps">
                    <label>Reps:</label>
                    <input
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                    />
                </div>
            </div>
            <label>Description / Instructions:</label>
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add to Workout</button>
        </form>
    );
}
