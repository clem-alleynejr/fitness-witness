import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className='auth-page'>

      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Existing User? Log In' : 'No Account? Sign Up'}</button>
      {showSignUp ? 
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
    </main>
  );
}