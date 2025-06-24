import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login but remember where they were trying to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;