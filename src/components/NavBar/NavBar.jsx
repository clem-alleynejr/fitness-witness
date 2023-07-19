import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <>
      {user ?
        <>
          <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">Fitness Witness</Link>
              <div className='ms-auto'>
                <Link to="/workouts" className="navbar-brand">My Workouts</Link>
                <span className="navbar-brand mb-0 h1">{user.name}</span>
                <Link to="" className="navbar-brand" onClick={handleLogOut}>Log Out</Link>
              </div>
            </div>
          </nav>
        </>
        :
        <>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">Fitness Witness</Link>
              <div className='ms-auto'>
                <Link to="/auth" className="navbar-brand">Log In/Sign Up</Link>
              </div>
            </div>
          </nav>
        </>
      }
    </>
  );
}

