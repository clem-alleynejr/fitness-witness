import { Routes } from "react-router-dom";

export default function App() {
    const [user, setUser] = useState(getUser());
    const [unsavedWorkout, setUnsavedWorkout] = useState(null);
    const [editWorkout, setEditWorkout] = useState(false);
  
    return (
      <main className="workouts-page">

        <Routes>
            <Route>
                
            </Route>

        </Routes>
        {user ? (
          <>

            <Route
                path="/workouts/new"
                element={
                    <NewWorkoutPage
                        user={user}
                        setUser={setUser}
                        unsavedWorkout={unsavedWorkout}
                        setUnsavedWorkout={setUnsavedWorkout}
                        editWorkout={editWorkout}
                        setEditWorkout={setEditWorkout}
                    />
                }
            />
            <Route path="/workouts/:id" element={<WorkoutDetail />} />






  
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
  
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
  
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <>
            <NavBar user={user} setUser={setUser} />
  
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
  
              <Route path="/auth" element={<AuthPage setUser={setUser} />} />
            </Routes>
          </>
        )}
      </main>
    );
  }








