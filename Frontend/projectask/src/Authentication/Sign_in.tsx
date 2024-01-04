import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../global/reduxState";
import { signInAccount } from "../Api/api";
function SigniN() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object({
    email: yup.string().email().required("Must be filled"),
    password: yup.string().required("Must be filled"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmiteNow = handleSubmit((data: any) => {
    signInAccount(data).then((res: any) => {
      console.log(data);
      dispatch(loginUser(res.data));
      // console.log("gggg");
      navigate("/dashboard");
    });
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSubmiteNow}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
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
              id="password"
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
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign Up
          </button>
          <div className="w-full flex justify-center text-[12px] mt-8 ">
            <span className="font-bold text-purple-600">
              Don't have an Account,
            </span>
            <Link to="/signup">
              <span className="ml-1 font-bold">Register here</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigniN;
