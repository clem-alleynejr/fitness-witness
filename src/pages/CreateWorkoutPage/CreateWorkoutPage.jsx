import "./CreateWorkoutPage.css";
import { useEffect, useState } from "react";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import * as exercisesAPI from "../../services/exercises-api";

export default function CreateWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState([]);
    const [optionsLoading, setOptionsLoading] = useState(true);
    const [optionsError, setOptionsError] = useState(false);
    const [hasMoreOptions, setHasMoreOptions] = useState(false);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [bodyPartFilter, setBodyPartFilter] = useState(null);
    const [equipmentFilter, setEquipmentFilter] = useState(null);

    const [exerciseSelections, setExerciseSelections] = useState(null);
    const [workoutName, setWorkoutName] = useState(null);

    function handleSearch(e) {
        setQuery(e.target.value);
        setPage(1);
    }

    // Reset list of options when query changes
    useEffect(
        function () {
            setExerciseOptions([]);
        },
        [query]
    );

    // Gets exercise choices from API
    useEffect(
        function () {
            const abortController = new AbortController();

            async function getExerciseOptions() {
                setOptionsLoading(true);
                setOptionsError(false);
                try {
                    const params = { query: query, page: page };
                    const exerciseSubset = await exercisesAPI.getSubset(
                        params,
                        abortController.signal
                    );
                    console.log(exerciseSubset.results);
                    setExerciseOptions((prevExercises) => {
                        return [...prevExercises, ...exerciseSubset.results];
                    });
                    setHasMoreOptions(exerciseSubset.results.length > 0);
                    setOptionsLoading(false);
                    setOptionsError(false);
                } catch (error) {
                    if (error.name === "AbortError") {
                        console.log("Fetch aborted");
                    } else {
                        console.log(error);
                        setOptionsLoading(false);
                        setOptionsError(true);
                    }
                }
            }

            getExerciseOptions();

            return () => {
                abortController.abort();
            };
        },
        [query, page]
    );

    return (
        <div className="create-workout-page">
            <h1 className="page-title">Create Workout</h1>
            <div className="workout-creator">
                <form className="new-workout-form">
                    <label>Workout Name:</label>
                    <input
                        type="text"
                        placeholder="Ex. Chest Day, Leg Day, etc."
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                        required
                    />
                    {exerciseSelections && (
                        <ExerciseList exercises={exerciseSelections} />
                    )}
                </form>
                <div className="exercise-select">
                    <h3>Exercise Selector</h3>
                    <div className="filters">
                        <h3>Filters</h3>
                    </div>
                    <div className="exercise-options">
                        <input
                            type="text"
                            placeholder="Search Exercise"
                            value={query}
                            onChange={handleSearch}
                        />
                        <button>All Filters</button>
                        <div
                            className={`options-loading ${
                                optionsLoading ? "" : "hidden"
                            }`}
                        >
                            Loading...
                        </div>
                        <div
                            className={`options-error ${
                                optionsError ? "" : "hidden"
                            }`}
                        >
                            Error Fetching Exercises
                        </div>
                        {exerciseOptions && (
                            <ExerciseList exercises={exerciseOptions} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
