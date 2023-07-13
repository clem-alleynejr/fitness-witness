import { useState, useEffect, useRef } from 'react';
import * as exercisesAPI from '../../utilities/exercises-api'

export default function NewWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState([]);
    const bodyPartRef = useRef([]);

    useEffect(function() {
        async function getExercises() {
            const exercises = await exercisesAPI.getAll();
            bodyPartRef.current = [...new Set(exercises.map(exercise => exercise.bodyPart))]
            setExerciseOptions(exercises);
        }
        getExercises();
    }, []);

    return (
<h1>NewWorkoutPage</h1>
    )
} 