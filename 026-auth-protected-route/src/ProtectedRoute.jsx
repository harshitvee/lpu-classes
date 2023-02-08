import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default ProtectedRoute;
