import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main className="auth-page">
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}

      <div className="switch-form">
        {showSignUp ? <p>Existing User?</p> : <p>No Account?</p>}

        <button onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? "Log In" : "Sign Up"}
        </button>
      </div>
    </main>
  );
}
