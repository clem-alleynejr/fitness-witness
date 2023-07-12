import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutsListPage from '../WorkoutsListPage/WorkoutsListPage';
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage';
import WorkoutDetailPage from '../WorkoutDetailPage/WorkoutDetailPage';
import CalendarSchedulePage from '../CalendarSchedulePage/CalendarSchedulePage';
import WorkoutOfDayPage from '../WorkoutOfdayPage/WorkoutOfDayPage';
import ListSchedulePage from '../ListSchedulePage/ListSchedulePage';
import NewWorkoutOfDayPage from '../NewWorkoutOfDayPage/NewWorkoutOfDayPage';


import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/workouts" element={<WorkoutsListPage />} />
            <Route path="/workouts/new" element={<NewWorkoutPage />} />
            <Route path="/workouts/:workoutName" element={<WorkoutDetailPage />} />

            <Route path="/workouts-of-days/calendar-schedule" element={<CalendarSchedulePage />} />
            <Route path="/workouts-of-days/calendar-schedule/:date" element={<WorkoutOfDayPage />} />
            <Route path="/workouts-of-days/list-schedule" element={<ListSchedulePage />} />
            <Route path="/workouts-of-days/new" element={<NewWorkoutOfDayPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/auth" element={<AuthPage />} setUser={setUser} />
          </Routes>
        </>
      }
    </main>
  );
}
