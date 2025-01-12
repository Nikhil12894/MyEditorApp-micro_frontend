import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./app/context/AuthContext";

const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
