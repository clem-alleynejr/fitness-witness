import "./CreateWorkoutPage.css";
import { useEffect, useState, useRef, useCallback } from "react";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import * as exercisesAPI from "../../services/exercises-api";
import CreateExerciseForm from "../../components/CreateExerciseForm/CreateExerciseForm";
import CreateWorkoutForm from "../../components/CreateWorkoutForm/CreateWorkoutForm";

export default function CreateWorkoutPage() {
    const [exerciseSelections, setExerciseSelections] = useState([]);
    const [workoutName, setWorkoutName] = useState("");
    const [workoutDescription, setWorkoutDescription] = useState("");
    const [showExerciseForm, setShowExerciseForm] = useState(false);

    const [exerciseOptions, setExerciseOptions] = useState([]);
    const [optionsLoading, setOptionsLoading] = useState(true);
    const [optionsError, setOptionsError] = useState(false);
    const [hasMoreOptions, setHasMoreOptions] = useState(false);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const [bodyPartFilter, setBodyPartFilter] = useState(null);
    const [equipmentFilter, setEquipmentFilter] = useState(null);

    // will hold intersection (viewport) observer:
    const observer = useRef();

    // below callback will be invoked once last exercise of subset is rendered
    const lastExerciseElementRef = useCallback(
        (lastExerciseOfPage) => {
            // exit function if still in process of fetching new page of exercises
            if (optionsLoading) return;
            // disconnects current observer, stopping it from observing any elements. This takes affect when fetching pages after page 1
            if (observer.current) observer.current.disconnect();
            // create new intersection observer that changes the page if the first element of whatever it is observing isIntersecting (visible on screen). Page will only change if there are more exercises to be shown from the search query
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMoreOptions) {
                    setPage((prevPage) => prevPage + 1);
                }
            });
            // sets the last exercise of the page as the entry (entries[0]) for the newly created IntersectionObserver (stored as observer.current)
            if (lastExerciseOfPage)
                observer.current.observe(lastExerciseOfPage);
            // rerun if optionsLoading state changes or hasMoreOptions state changes
        },
        [optionsLoading, hasMoreOptions]
    );

    function handleSearch(e) {
        setQuery(e.target.value);
        setPage(1);
    }

    function handleAddCustomExerciseToWorkout(exercise) {
        setExerciseSelections([exercise, ...exerciseSelections]);
        console.log(exerciseSelections);
    }

    function handleShowExerciseForm() {
        setShowExerciseForm(true);
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
                <CreateWorkoutForm
                    workoutName={workoutName}
                    setWorkoutName={setWorkoutName}
                    workoutDescription={workoutDescription}
                    setWorkoutDescription={setWorkoutDescription}
                    exerciseSelections={exerciseSelections}
                    showExerciseForm={showExerciseForm}
                    setShowExerciseForm={setShowExerciseForm}
                    handleShowExerciseForm={handleShowExerciseForm}
                />

                {showExerciseForm && (
                    <CreateExerciseForm
                        handleAddCustomExerciseToWorkout={
                            handleAddCustomExerciseToWorkout
                        }
                        setShowExerciseForm={setShowExerciseForm}
                    />
                )}
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

                        {exerciseOptions && (
                            <ExerciseList
                                exercises={exerciseOptions}
                                loading={optionsLoading}
                                error={optionsError}
                                lastExerciseElementRef={lastExerciseElementRef}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
