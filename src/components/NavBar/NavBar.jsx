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
              <Link to="/" className="navbar-brand home">
              <img src="https://images-platform.99static.com/Lw8CyZQrGrnlyPa-QHw8p4Tn7Nw=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/121/121893/attachment_121893514" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                <span>Fitness Witness</span>
                </Link>
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
          <nav className="navbar bg-dark navbar-dark">
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

