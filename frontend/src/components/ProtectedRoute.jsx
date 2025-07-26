import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

// Ginagamit para protektahan ang mga route
const ProtectedRoute = ({ children }) => {
  const user = useAuthStore((state) => state.user);

  // Kung walang user, i-redirect sa /login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
