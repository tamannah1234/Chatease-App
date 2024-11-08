// import { Navigate } from "react-router-dom";
// // import { useAuth } from "./AuthContext";
// import { Loader2Icon } from "lucide-react";

// function ProtectedRoute(props) {
//     const { userData, loading } = useAuth();
//     console.log("user Data", userData)
//     const children = props.children;
//     if (loading) {
//         return <div className="h-screen w-screen flex items-center justify-center bg-background">
//             <Loader2Icon className="w-8 h-8 animate-spin" />
//         </div>
//     }

//     if (userData) {
//         return children
//     } else {
//         return <Navigate to="/login"></Navigate>
//     }
// }
// export default ProtectedRoute;

















import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // Redirect to login if user is not logged in
    return <Navigate to="/login" />;
  }
  // Render the protected component if logged in
  return children;
};

export default ProtectedRoute;
