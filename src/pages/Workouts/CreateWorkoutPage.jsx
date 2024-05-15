import './CreateWorkoutPage.css'
import { useEffect, useState } from "react";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import * as exercisesAPI from "../../services/exercises-api";


export default function CreateWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState(null);
    const [exerciseSelections, setExerciseSelections] = useState(null);
    const [workoutName, setWorkoutName] = useState(null);
    const [exerciseSearch, setExerciseSearch] = useState(null);
    const [bodyPartFilter, setBodyPartFilter] = useState(null);
    const [equipmentFilter, setEquipmentFilter] = useState(null);

    // Gets exercise choices from third party API
    useEffect(function () {
        async function getExerciseOptions() {
          try {
            const exercises = await exercisesAPI.getAll();
            console.log(exercises);
            setExerciseOptions(exercises);
          } catch (error) {
            console.log(error);
          }
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
                        {exerciseSelections && <ExerciseList exercises={exerciseSelections} />}
                </form>
                <div className="exercise-select">
                    <h4>Exercise Select</h4>
                        <div className="filters">
                          <h3>Filters</h3>
                        </div>
                        <div className="exercise-options">
                            <input type="text" placeholder="Search Exercise" onChange={(e) => setExerciseSearch(e.target.value)} />
                            <button>All Filters</button>
                            {exerciseOptions && <ExerciseList exercises={exerciseOptions} /> }
                        </div>
                </div>
            </div>
        </div>
    );
}
