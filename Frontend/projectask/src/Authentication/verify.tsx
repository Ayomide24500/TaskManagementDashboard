import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { verifyAccount } from "../Api/api";

const Verify = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    token: yup.string().required("Must be filled"),
    email: yup.string().email().required("Must be filled"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmiteNow = handleSubmit((data: any) => {
    verifyAccount(data).then(() => {
      navigate("/signin");
    });
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className=" border rounded-md w-[400px] min-h-[200px]">
        <div className="m-4 font-[400] mb-16">Verify</div>
        <form className="m-3" onSubmit={handleSubmiteNow}>
          <div className="my-2">
            <input
              className="w-[100%] h-[45px] rounded-sm border pl-2"
              placeholder="email"
              {...register("email")}
            />
            {errors.token?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.token?.message}
              </div>
            )}
          </div>
          <div className="my-2">
            <input
              className="w-[100%] h-[45px] rounded-sm border pl-2"
              placeholder="token"
              {...register("token")}
            />
            {errors.token?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.token?.message}
              </div>
            )}
          </div>

          <button
            className="w-[80%] bg-yellow-500 mt-8 h-[49px] rounded-sm text-white ml-9"
            type="submit"
          >
            verify this Account
          </button>
          <div className="w-full flex justify-center text-[12px] mt-8 ">
            <Link to="/signup">
              <span className="ml-1 font-bold">Go back to register here</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
