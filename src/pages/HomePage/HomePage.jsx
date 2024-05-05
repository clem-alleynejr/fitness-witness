import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage({ user }) {
    return (
        <main className='home-page'>
        <h1 className='home'>Welcome to </h1><br /><h1 className='home'>Fitness Witness</h1>
        <p className='home'>Keep yourself accountable on your fitness journey with the help of this app!</p>
        { user ?
            <Link to="/workouts/new" className="button btn-sm">Create a New Workout!</Link>
            :
            <Link to="/auth" className='button btn-sm'>Log In/Sign Up!</Link>
        }
        </main >
    )
} 