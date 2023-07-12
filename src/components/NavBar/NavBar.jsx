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
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      {user ?
        <>
          <Link to="/workouts">My Workouts</Link>
          &nbsp; | &nbsp;
          <p>{user.name}</p>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
        :
        <Link to="/auth">Log In/Sign Up</Link>
      }
    </nav>
  );
}

