// src/pages/Unauthorized.jsx
import { useNavigate } from "react-router-dom";
import "./Unauthorized.css"; // Optional for custom CSS

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorized">
      <h1>Unauthorized Access</h1>
      <p>You are not allowed to view this page.</p>
      <button className="back-button" onClick={() => navigate("/")}>
        Go to Homepage
      </button>
    </div>
  );
};

export default Unauthorized;
