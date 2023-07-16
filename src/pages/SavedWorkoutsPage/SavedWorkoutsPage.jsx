import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './SavedWorkoutsPage.css'
import WorkoutList from '../../components/WorkoutList/WorkoutList'
import * as workoutsAPI from '../../utilities/workouts-api'

export default function SavedWorkoutsPage() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(function () {
        async function getWorkouts() {
            const workouts = await workoutsAPI.getAll();
            setWorkouts(workouts);
        }
        getWorkouts();
    }, []);

    return (
        <main className="SavedWorkoutsPage">
            <aside>
                <h1>SavedWorkoutsPage</h1>
                <Link to="/workouts/new" className="button btn-sm">Add New Workout</Link>
            </aside>

            {/* Render WorkoutList components */}
            <WorkoutList
                workouts={workouts}
            />

            {/* Render existing Workoutdetail component */}

        </main>
    );
}