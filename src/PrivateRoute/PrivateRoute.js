import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      ) : user ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
