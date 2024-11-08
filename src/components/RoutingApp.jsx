import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Ensure you have this import if 'auth' is defined in your firebase config
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function RoutingApp() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userData = await signInWithPopup(auth, provider);
      await createUser(userData); // Ensure createUser is defined and correctly handles user data
      navigate("/");
    } catch (error) {
      // Handle the specific error when the user closes the popup
      if (error.code === 'auth/popup-closed-by-user') {
        console.log("Popup was closed before completing the sign-in.");
        // Optionally, you can show a message to the user
      } else {
        // Handle other errors
        console.error("An error occurred during sign-in:", error.message);
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default RoutingApp;
