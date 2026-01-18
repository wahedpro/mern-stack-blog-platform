import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import apiRequestHandler from "../../services/ApiRequestHandler";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: async (data) => {
      return await apiRequestHandler("users/login", "POST", data);
    },
    onSuccess: (response) => {
      const { user, token } = response.data;
      login(user, token);
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
      alert("Invalid email or password");
    },
  });

  const onSubmit = (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    loginMutation.mutate(loginData);
  };
  return (
    <main className="flex items-center justify-center w-full min-h-screen px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col max-w-96"
      >
        <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>

        <p className="mt-4 text-base text-gray-500/90">
          Please enter email and password to access.
        </p>

        <div className="mt-10">
          <label className="font-medium">Email</label>
          <input
            placeholder="Please enter your email"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
        </div>

        <div className="mt-6">
          <label className="font-medium">Password</label>
          <input
            placeholder="Please enter your password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
        </div>

        <button
          type="submit"
          disabled={loginMutation.isPending}
          className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
        >
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </button>
        <p className="text-center py-8">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
