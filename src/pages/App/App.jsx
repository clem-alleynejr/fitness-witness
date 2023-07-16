import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage';
import SavedWorkoutsPage from '../SavedWorkoutsPage/SavedWorkoutsPage';



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

            <Route path="/workouts/new" element={<NewWorkoutPage user={user} setUser={setUser} />} />
            <Route path="/workouts" element={<SavedWorkoutsPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/auth" element={<AuthPage setUser={setUser}/>}  />
          </Routes>
        </>
      }
    </main>
  );
}
