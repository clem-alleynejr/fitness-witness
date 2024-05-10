import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "./services/users-service";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import SavedWorkoutsPage from "./pages/SavedWorkoutsPage/SavedWorkoutsPage";
import WorkoutsIndexPage from "./pages/Workouts/WorkoutsIndexPage";
import NewWorkoutPage from "./pages/Workouts/NewWorkoutPage";
import ShowWorkoutPage from "./pages/Workouts/ShowWorkoutPage";
import EditWorkoutPage from "./pages/Workouts/EditWorkoutPage";

import NavBar from "./components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [unsavedWorkout, setUnsavedWorkout] = useState(null);
  const [editWorkout, setEditWorkout] = useState(false);

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />

      <div className="page">
        <Routes>
          {/* Home Page*/}
          <Route path="/" element={<HomePage user={user} />} />

          {/* Workout Related Pages */}
          {user ? (
            <>
              <Route path="/workouts" element={<WorkoutsIndexPage />} />
              <Route path="/workouts/new" element={<NewWorkoutPage />} />
              <Route path="/workouts/:id" element={<ShowWorkoutPage />} />
              <Route path="/workouts/:id/edit" element={<EditWorkoutPage />} />
            </>
          ) : (
            // Auth Page (No User)
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          )}

          {/* Catch All Route */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </main>
  );
}
