import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { isLoading, isAdmin, user } = useAuth();
  let location = useLocation();
  return (
    <>
      {isLoading ? (
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      ) : user && isAdmin ? (
        children
      ) : (
        <Navigate to="/" state={{ from: location }} />
      )}
    </>
  );
};

export default AdminRoute;
