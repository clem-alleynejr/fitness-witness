import './CreateWorkoutPage.css'
import { useEffect, useState } from "react";
import ExerciseList from "../../components/ExerciseList/ExerciseList";

export default function CreateWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState(null);
    const [exerciseSelections, setExerciseSelections] = useState(null);
    const [workoutName, setWorkoutName] = useState(null);
    const [exerciseSearch, setExerciseSearch] = useState(null);

    // Gets exercise choices from third party API
    useEffect(function () {
        async function getExerciseOptions() {
            setExerciseOptions(exerciseOptions);
        }
        getExerciseOptions();
    }, []);

    return (
        <div className="create-workout-page">
            <h1 className="page-title">Create Workout</h1>
            <div className="workout-creator">
                <form className="new-workout-form">
                    <label>Workout Name:</label>
                    <input
                        type="text"
                        placeholder='Ex. Chest Day, Leg Day, etc.'
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                        required
                    />
                    <div className="exercise-selections">
                        {/* <ExerciseList exercises={exerciseSelections} /> */}
                    </div>
                </form>
                <div className="exercise-select">
                    <h2>Exercise Select</h2>
                    <div className="filters-and-exercises">
                        <div className="filters">
                          <h3>Filters</h3>
                        </div>
                        <div className="exercise-options">
                            <input type="text" placeholder="Search Exercise" onChange={(e) => setExerciseSearch(e.target.value)} />
                            {/* <ExerciseList exercises={exerciseOptions} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
