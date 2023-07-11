import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} setUser={setUser}/>

              <Route path="/workouts" element={<WorkoutsListPage />} />
              <Route path="/workouts/new" element={<NewWorkoutPage/>} />
              <Route path="/workouts/:workoutName" element={<WorkoutDetailPage />} />

              <Route path="/workouts-of-days/calendar-schedule" element={<CalendarSchedulePage />} />
              <Route path="/workouts-of-days/calendar-schedule/:date" element={<WorkoutOfDayPage />} />
              <Route path="/workouts-of-days/list-schedule" element={<ListSchedulePage />} /> 
              <Route path="/workouts-of-days/new" element={<NewWorkoutOfDayPage />} />

              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
    </main>
  );
}
