import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore"; // adjust path as needed
import { Link, Outlet } from "react-router-dom";
import "./UserLayout.css";

const UserLayout = () => {
  const { user, token } = useAuthStore();
  const navigate = useNavigate();

  // 🔐 Check role before showing the layout
  useEffect(() => {
    if (!token || !user) return;
    if (user.role !== "user") {
      navigate("/unauthorized");
    }
  }, [token, user, navigate]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">My Store</div>

        <div className="navbar-search">
          <input type="text" placeholder="Search product..." />
        </div>

        <div className="navbar-buttons">
          <Link to="cart" className="icon-button" title="Cart">
            🛒
          </Link>
          <Link to="order" className="icon-button" title="Order">
            order
          </Link>
          <Link to="setting" className="icon-button" title="Settings">
            ⚙️
          </Link>
        </div>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
