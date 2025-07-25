import { useAuthStore } from "../../../store/authStore";
import LogInForm from "../../auth/components/LogInForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LogInPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);
  const handleLogIn = async (formData) => {
    console.log("login page - handle login :", formData);
    try {
      const data = await login(formData);
      console.log("handlelogin - data :", data);

      /*
      if (data.user.role === "admin") {
        navigate("/admin");
      } else if (data.user.role === "user") {
        navigate("/");
      }
      */
    } catch (error) {
      console.log("login page error :", error);
    }
  };

  /*
  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to homepage after login
    }
  }, [user, navigate]);
  */

  return <LogInForm onSubmit={handleLogIn} />;
};

export default LogInPage;
