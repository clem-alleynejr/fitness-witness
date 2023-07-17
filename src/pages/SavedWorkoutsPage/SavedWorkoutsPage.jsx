import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './SavedWorkoutsPage.css'
import WorkoutList from '../../components/WorkoutList/WorkoutList'
import WorkoutDetail from '../../components/WorkoutDetail/WorkoutDetail'
import * as workoutsAPI from '../../utilities/workouts-api'

export default function SavedWorkoutsPage() {
    const [workouts, setWorkouts] = useState([]);
    const [activeWorkout, setActiveWorkout] = useState(null);

    useEffect(function () {
        async function getWorkouts() {
            const workouts = await workoutsAPI.getAll();
            setWorkouts(workouts);
            setActiveWorkout(workouts[0] || null);
        }
        getWorkouts();
    }, []);

    
    async function handleDeleteWorkout(workoutId) {
        const updatedWorkoutList = await workoutsAPI.deleteSavedWorkout(workoutId)
        setWorkouts(updatedWorkoutList)
        setActiveWorkout(workouts[0] || null);
    }

    async function handleEditworkout(workoutId, newWorkoutName) {
        const updatedWorkout = await workoutsAPI.editWorkout(workoutId);
        setActiveWorkout(updatedWorkout)
    }

    return (
        <main className="SavedWorkoutsPage">
            <aside>
                <h1>SavedWorkoutsPage</h1>
                <Link to="/workouts/new" className="button btn-sm">Add New Workout</Link>
            </aside>

            {/* Render WorkoutList components */}
            <WorkoutList
                workouts={workouts}
                activeWorkout={activeWorkout}
                setActiveWorkout={setActiveWorkout}
            />

            {/* Render existing Workoutdetail component */}
            <WorkoutDetail
                workout={activeWorkout}
                handleDeleteWorkout={handleDeleteWorkout}
                handleEditWorkout={handleEditworkout}
            />

        </main>
    );
}