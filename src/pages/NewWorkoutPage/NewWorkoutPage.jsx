import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import * as exercisesAPI from '../../utilities/exercises-api'
import BodyPartList from '../../components/BodyPartList/BodyPartList'
import ExerciseOptionList from '../../components/ExerciseOptionList/ExerciseOptionList'
import NewWorkoutDetail from '../../components/NewWorkoutDetail/NewWorkoutDetail'

export default function NewWorkoutPage() {
    const [exerciseOptions, setExerciseOptions] = useState([]);
    const [activeBodyPart, setActiveBodyPart] = useState('')
    const bodyPartRef = useRef([]);

    useEffect(function () {
        async function getExercises() {
            const exercises = await exercisesAPI.getAll();
            bodyPartRef.current = [...new Set(exercises.map(exercise => exercise.bodyPart))]
            setExerciseOptions(exercises);
            setActiveBodyPart(bodyPartRef.current[0]);
        }
        getExercises();
    }, []);

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
            />
            <NewWorkoutDetail />
        </main>
    )
} 