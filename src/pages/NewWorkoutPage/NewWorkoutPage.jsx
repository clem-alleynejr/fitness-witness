import { useState, useEffect } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api'

export default function NewWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState([]);

    useEffect(function() {
        async function getExercises() {
            const exercises = await exercisesAPI.getAll();
            setExerciseOptions(exercises);
        }
        getExercises();
    }, []);

    return (
        <>
        <h1>NewWorkoutPage</h1>
        <button onClick={setExerciseOptions}>Trigger re-render</button>
        </>
    )
} 