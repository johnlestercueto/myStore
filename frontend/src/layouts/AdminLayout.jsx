import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-title">Go Store Admin</div>
        <ul className="sidebar-links">
          <li>
            <Link to="addproduct"> ADD PRODUCT</Link>
          </li>
          <li>
            <Link to="/setting">⚙️ Settings</Link>
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
