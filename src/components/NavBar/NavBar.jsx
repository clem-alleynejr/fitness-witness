import "./NavBar.css";
import { Link } from "react-router-dom";
import * as userService from "../../services/users-service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavBar({ user, setUser }) {
  const [navCollapsed, setNavCollapsed] = useState(true);

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
    setNavCollapsed(true);
  }

  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="brand-and-toggle">
          <Link to="/" onClick={() => setNavCollapsed(true)}className="navbar-brand">
            <img
              src="https://images-platform.99static.com/Lw8CyZQrGrnlyPa-QHw8p4Tn7Nw=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/121/121893/attachment_121893514"
              alt="Logo"
              width="30"
              height="24"
            />
            Fitness Witness
          </Link>

          <FontAwesomeIcon
            onClick={() => setNavCollapsed(true)}
            icon={faClose}
            className={`close-nav-button ${navCollapsed ? "hidden" : ""} `}
          />

          <FontAwesomeIcon
            onClick={() => setNavCollapsed(false)}
            icon={faBars}
            className={`nav-toggle-button ${navCollapsed ? "" : "hidden"} `}
          />
        </div>

        <div className={`collapsible-nav ${navCollapsed ? "hidden" : ""} `}>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to={user ? "/workouts" : "/auth"} onClick={() => setNavCollapsed(true)}>My Workouts</Link>
            </li>
            <li className="nav-item">
              <Link to={user ? "/workouts/new" : "/auth"} onClick={() => setNavCollapsed(true)}>Create Workout</Link>
            </li>
          </ul>

          <ul className="auth-links">
            {user ? (
              <div className="username-logout">
                <li className="nav-item">{user.name}</li>
                <li className="nav-item">
                  <Link to="" onClick={handleLogOut}>
                    Log Out
                  </Link>
                </li>
              </div>
            ) : (
              <li className="nav-item">
                <Link to="/auth" onClick={() => setNavCollapsed(true)}>Log In / Sign Up</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
