import SignUpForm from "../components/SignUpForm";
import { useAuthStore } from "../../../store/authStore";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const signup = useAuthStore((state) => state.signup);
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    console.log("signup page - handlesignup - form data:", formData);
    try {
      const data = await signup(formData);
      console.log("signup page - handle signup - data :", data);
      navigate("/login");
    } catch (error) {
      console.log("signup page error :", error);
    }
  };
  return <SignUpForm onSubmit={handleSignUp} />;
};

export default SignUpPage;
