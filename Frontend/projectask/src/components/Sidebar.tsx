import { AiOutlineClose } from "react-icons/ai";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeToggle, logOut } from "../global/reduxState";
const Sidebar = () => {
  const dispatch = useDispatch();
  const readToggle = useSelector((state: any) => {
    return state.toggle;
  });

  return (
    <div
      className={`transition-all z-40 duration-300 fixed border-r h-[100vh] bg-white shadow-md`}
      style={{
        width: `${readToggle ? "240px" : "70px"}`,
      }}
    >
      <div className="m-3">
        {readToggle ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(false));
            }}
          >
            <FaEnvelopeOpenText size={25} />
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(true));
            }}
          >
            <AiOutlineClose size={25} />
          </div>
        )}
      </div>
      <div className="h-[90%] flex flex-col">
        <div className="text-[25px] font-bold w-full text-center ">Logo</div>
        <div className="h-[80%] w-full flex justify-center items-center flex-col gap-5">
          <div className="h-[60px] w-[90%] bg-black flex justify-center items-center cursor-pointer">
            <p className="text-white text-lg">Dashboard</p>
          </div>
          <div className="h-[60px] w-[90%] bg-white flex justify-center items-center cursor-pointer">
            {" "}
            <p className="text-black text-lg ">Analytics</p>
          </div>
          <div className="h-[60px] w-[90%] bg-white flex justify-center items-center cursor-pointer ">
            {" "}
            <p className="text-black text-lg ">Teams</p>
          </div>
          <div className="h-[60px] w-[90%] bg-white flex justify-center items-center cursor-pointer">
            <p className="text-black text-lg ">Documents</p>
          </div>
          <div className="h-[60px] w-[90%] bg-white flex justify-center items-center cursor-pointer">
            <p className="text-black text-lg ">Settings</p>
          </div>
        </div>
        <div className="flex-1" />
        <button
          className="w-[100px] h-[40px] mb-4 px-2 transition-all duration-300 hover:bg-black hover:text-white bg-yellow-500 ml-10"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
