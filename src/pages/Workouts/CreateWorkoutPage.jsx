import { useState } from "react";
import ExerciseList from "../../components/ExerciseList/ExerciseList";

export default function CreateWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState(null);
    const [exerciseSelections, setExerciseSelections] = useState(null);

    // Gets exercise choices from third party API
    useEffect(function () {
        async function getExerciseOptions() {
            setExerciseOptions(exerciseOptions);
        }
        getWorkouts();
    }, []);

    return (
        <div className="create-workout-page">
            <h1 className="page-title">Create Workout</h1>
            <div className="workout-creator">
                <form className="new-workout-form">
                    <label>Workout Name:</label>
                    <input type="text" required />
                    <div className="exercise-selections">
                        <ExerciseList exercises= {exerciseSelections} />
                    </div>
                </form>
                <div className="exercise-select">
                    <h2>Select Exercises</h2>
                    <div className="filters-and-exercises">
                        <div className="filters"></div>
                        <div className="exercise-options">
                            <ExerciseList exercises={exerciseOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
