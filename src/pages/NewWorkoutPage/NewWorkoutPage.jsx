import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './NewWorkoutPage.css';
import * as exercisesAPI from '../../utilities/exercises-api'
import * as workoutsAPI from '../../utilities/workouts-api'
import BodyPartList from '../../components/BodyPartList/BodyPartList'
import ExerciseOptionList from '../../components/ExerciseOptionList/ExerciseOptionList'
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail'

export default function NewWorkoutPage({ user, setUser, unsavedWorkout, setUnsavedWorkout, editWorkout, setEditWorkout }) {
    const [exerciseOptions, setExerciseOptions] = useState([]);
    const [activeBodyPart, setActiveBodyPart] = useState('')
    const bodyPartRef = useRef([]);
    const navigate = useNavigate();

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
        const updatedUnsavedWorkout = await workoutsAPI.addExerciseToUnsavedWorkout(exerciseId);
        setUnsavedWorkout(updatedUnsavedWorkout)
    }

    async function handleChangeWorkoutName(workoutId, newWorkoutName) {
        const updatedUnsavedWorkout = await workoutsAPI.setWorkoutName(workoutId, newWorkoutName);
        setUnsavedWorkout(updatedUnsavedWorkout)
    }

    async function handleChangeSetQty(exerciseId, newSetQty) {
        const updatedUnsavedWorkout = await workoutsAPI.setExerciseSetQtyInUnsavedWorkout(exerciseId, newSetQty);
        setUnsavedWorkout(updatedUnsavedWorkout)
    }

    async function handleChangeRepQty(exerciseId, newRepQty) {
        const updatedUnsavedWorkout = await workoutsAPI.setExerciseRepQtyInUnsavedWorkout(exerciseId, newRepQty);
        setUnsavedWorkout(updatedUnsavedWorkout)
    }

    async function handleSaveUnsavedWorkout() {
        await workoutsAPI.saveUnsavedWorkout();
        navigate('/workouts');
    }

    return (
        <main className="NewWorkoutPage">
            <h1>New Workout Creator</h1>

            <WorkoutDetail
                workout={unsavedWorkout}
                handleChangeWorkoutName={handleChangeWorkoutName}
                handleChangeSetQty={handleChangeSetQty}
                handleChangeRepQty={handleChangeRepQty}
                handleSaveUnsavedWorkout={handleSaveUnsavedWorkout}
                editWorkout={editWorkout}
                setEditWorkout={setEditWorkout}
            />

            <BodyPartList
                bodyParts={bodyPartRef.current}
                activeBodyPart={activeBodyPart}
                setActiveBodyPart={setActiveBodyPart}
            />

            <ExerciseOptionList
                exerciseOptions={exerciseOptions.filter(exercise => exercise.bodyPart === activeBodyPart)}
                handleAddToWorkout={handleAddToWorkout}
                useState={useState}
                activeBodyPart={activeBodyPart}
            />
        </main>
    )
} 