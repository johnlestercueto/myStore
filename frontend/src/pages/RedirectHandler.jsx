// src/pages/RedirectHandler.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore"; // adjust the path if needed

const RedirectHandler = () => {
  const navigate = useNavigate();
  const { user, token } = useAuthStore();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (user?.role === "admin") {
      navigate("/admin");
    } else if (user?.role === "user") {
      navigate("/user");
    } else {
      navigate("/login"); // fallback
    }
  }, [navigate, token, user]);

  return null;
};

export default RedirectHandler;
