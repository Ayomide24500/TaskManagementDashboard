import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { createAccount } from "../Api/api";

function SignUp() {
  const navigate = useNavigate();
  const schema = yup.object({
    username: yup.string().required("Must be filled"),
    email: yup.string().email().required("Must be filled"),
    password: yup.string().required("Must be filled"),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmiteNow = handleSubmit((data: any) => {
    console.log(data);
    createAccount(data).then(() => {
      navigate("/verify");
    });
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmiteNow}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
              {...register("username")}
            />
            {errors.username?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.username?.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.password?.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Confirm your password"
              required
              {...register("password")}
            />
            {errors.confirm?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.confirm?.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign Up
          </button>
          <div className="w-full flex justify-center text-[12px] mt-8 ">
            Already have an Account,{" "}
            <Link to="/signin">
              <span className="ml-1 font-bold">Login here</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
