import useForm from "../../../hooks/useForm";
import { Link } from "react-router-dom";

const LogInForm = ({ onSubmit }) => {
  const { values, handleChange, resetForm } = useForm({
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
        type="phonenumber"
        name="phonenumber"
        value={values.phonenumber}
        onChange={handleChange}
        placeholder="phonenumber"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button type="submit">LOG IN</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </form>
  );
};

export default LogInForm;
