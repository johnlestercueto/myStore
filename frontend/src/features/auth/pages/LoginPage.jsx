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
      const data = await login(formData); // tumatawag sa login function mula sa store
      console.log("handlelogin - data :", data);

      // ⬇️ Kapag admin, i-redirect sa admin dashboard
      if (data?.user?.role === "admin") {
        navigate("/admin");
      }
      // ⬇️ Kapag regular user, i-redirect sa homepage
      else if (data?.user?.role === "user") {
        navigate("/user");
      }
      // ⬇️ Kapag walang role o hindi kilala
      else {
        console.warn("Hindi kilalang role ng user:", data?.user?.role);
      }
    } catch (error) {
      console.log("login page error :", error);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "user") {
        navigate("/user");
      }
    }
  }, [user, navigate]);

  return <LogInForm onSubmit={handleLogIn} />;
};

export default LogInPage;
