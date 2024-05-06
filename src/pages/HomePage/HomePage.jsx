import { Link } from "react-router-dom";

export default function HomePage({ user }) {
  return (
    <main className="home-page">
      <div className="welcome-and-button">
        <div className="welcome-title-description">
          <h4>Welcome to </h4>

          <h1>Fitness Witness</h1>

          <h7>
            Keep yourself accountable on your fitness journey with the help of
            this app!
          </h7>
        </div>

        {user ? (
          <Link to="/workouts/new" className="button btn-sm">
            Create a New Workout!
          </Link>
        ) : (
          <Link to="/auth" className="button btn-sm">
            Log In/Sign Up!
          </Link>
        )}
      </div>
    </main>
  );
}
