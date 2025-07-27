import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore"; // adjust path as needed
import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const { user, token } = useAuthStore();
  const navigate = useNavigate();

  // 🔐 Check role before showing the layout
  useEffect(() => {
    if (!token || !user) return;
    if (user.role !== "admin") {
      navigate("/unauthorized");
    }
  }, [token, user, navigate]);

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-title">Go Store Admin</div>
        <ul className="sidebar-links">
          <li>
            <Link to="addproduct">ADD PRODUCT</Link>
          </li>
          <li>
            <Link to="adminsetting">⚙️ Settings</Link>
          </li>
        </ul>
      </aside>

      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
