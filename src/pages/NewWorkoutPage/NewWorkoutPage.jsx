import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import './NewWorkoutPage.css';
import * as exercisesAPI from '../../utilities/exercises-api'
import * as workoutsAPI from '../../utilities/workouts-api'
import BodyPartList from '../../components/BodyPartList/BodyPartList'
import ExerciseOptionList from '../../components/ExerciseOptionList/ExerciseOptionList'
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail'

export default function NewWorkoutPage({ user, setUser }) {
    const [exerciseOptions, setExerciseOptions] = useState([]);
    const [activeBodyPart, setActiveBodyPart] = useState('')
    const [unsavedWorkout, setUnsavedWorkout] = useState(null);
    const bodyPartRef = useRef([]);

    useEffect(function () {
        async function getExercises() {
            const exercises = await exercisesAPI.getAll();
            bodyPartRef.current = [...new Set(exercises.map(exercise => exercise.bodyPart))]
            setExerciseOptions(exercises);
            setActiveBodyPart(bodyPartRef.current[0]);
        }
        getExercises();

        async function getUnsavedWorkout() {
            const unsavedWorkout = await workoutsAPI.getUnsavedWorkout();
            setUnsavedWorkout(unsavedWorkout);
        }
        getUnsavedWorkout();

    }, []);

    async function handleAddToWorkout(exerciseId) {
        alert(`add exercise: ${exerciseId}`)
    }

    return (
        <main className="NewWorkoutPage">
            <aside>
                <BodyPartList
                    bodyParts={bodyPartRef.current}
                    activeBodyPart={activeBodyPart}
                    setActiveBodyPart={setActiveBodyPart}
                />
                <Link to="/workouts" className="button btn-sm">My Workouts</Link>
            </aside>
            <ExerciseOptionList
                exerciseOptions={exerciseOptions.filter(exercise => exercise.bodyPart === activeBodyPart)}
                handleAddToWorkout={handleAddToWorkout}
            />
            <WorkoutDetail 
                workout={unsavedWorkout}
            />
        </main>
    )
} 