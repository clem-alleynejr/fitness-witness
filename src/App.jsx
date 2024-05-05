import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import NewWorkoutPage from "./pages/NewWorkoutPage/NewWorkoutPage";
import SavedWorkoutsPage from "./pages/SavedWorkoutsPage/SavedWorkoutsPage";

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
          <Route path="/" element={<HomePage user={user} />} />

          {/* Non-users won't have access to the workouts page */}
          {user ? (
            <Route
              path="/workouts"
              element={
                <SavedWorkoutsPage
                  unsavedWorkout={unsavedWorkout}
                  setUnsavedWorkout={setUnsavedWorkout}
                  editWorkout={editWorkout}
                  setEditWorkout={setEditWorkout}
                />
              }
            />
          ) : (
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          )}

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </main>
  );
}
