import { Link, Outlet } from "react-router-dom";
import "./UserLayout.css";

const UserLayout = () => {
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
