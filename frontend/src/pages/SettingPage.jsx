import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore"; // adjust path if needed
import "./Setting.css"; // for styling

const SettingPage = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login"); // redirect to login page after logout
  };

  return (
    <div className="setting-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="greeting">Hello, {user?.name || "Guest"}!</h2>

      <button className="logout-btn" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default SettingPage;
