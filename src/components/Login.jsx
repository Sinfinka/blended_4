import { useForm } from "react-hook-form";
import { login } from "../api/axiosClient";
import useAuth from "../contexts/useAuth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data)
      .then((data) => {
        setToken(data.token);
        navigate("/contacts");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="email" {...register("email", { required: true })} />
      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      {(errors.password || errors.email) && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default Login;
