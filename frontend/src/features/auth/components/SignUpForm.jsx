import useForm from "../../../hooks/useForm";
import { Link } from "react-router-dom";

const SignUpForm = ({ onSubmit }) => {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    phonenumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="text"
        name="phonenumber"
        value={values.phonenumber}
        onChange={handleChange}
        placeholder="phone number"
      />
      <input
        type="text"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button type="submit">SIGN UP</button>
      <p>
        You have an account? <Link to="/login">Log in here</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
