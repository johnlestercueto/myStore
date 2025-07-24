// pages/Home.jsx
import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom";

export default function Home() {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      {user ? (
        <p>
          Hello, <strong>{user.username}</strong> 👋
        </p>
      ) : (
        <>
          Please log in to see your username.
          <Link to="/login">Log in here</Link>
        </>
      )}
    </div>
  );
}
