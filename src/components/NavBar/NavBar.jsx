import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
          <nav className="main-nav">
            <div className="navbar">
              <Link to="/" className="navbar-brand">
                <img
                  src="https://images-platform.99static.com/Lw8CyZQrGrnlyPa-QHw8p4Tn7Nw=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/121/121893/attachment_121893514"
                  alt="Logo"
                  width="30"
                  height="24"
                />
                Fitness Witness
              </Link>

              <button className="nav-toggle-button"></button>

              <div className="collapsible-nav">
                <ul className="nav-links">
                <li>
                  <Link
                    to={user ? "/workouts" : "/auth"}
                    className="navbar-brand"
                  >
                    My Workouts
                  </Link>
                </li>
                </ul>

                <ul className="auth-links">
                  {user ? (
                    <li>
                      <Link
                        to=""
                        className="navbar-brand"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/auth" className="navbar-brand">
                        Log In/Sign Up
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
  );
}
