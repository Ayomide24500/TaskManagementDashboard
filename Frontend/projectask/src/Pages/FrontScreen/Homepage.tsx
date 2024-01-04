import { TypeAnimation } from "react-type-animation";
import { AiOutlineMail } from "react-icons/ai";
import hero from "../../assets/tasks.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <section className="h-[calc(100vh-60px)] w-full bg-[rgb(16,25,53)] mt-[60px] flex justify-center items-start">
        <div className="h-[90%] w-[85%] mt-[60px] flex justify-between items-center">
          <div className="h-[100%] w-[45%]">
            <div className=" h-[70%] w-[90%] mb-[20px] ml-[50px]">
              <div className="h-[9%] w-[50%] bg-yellow-500 flex justify-center items-center rounded-[30px] font-semibold mb-[20px]">
                Best Project Management Tool
              </div>
              <div className="w-[80%] text-white font-mono font-bold text-[50px] m-0 mb-[20px]">
                <TypeAnimation
                  sequence={[
                    "Manage",
                    1000,
                    "Monitor",
                    1000,
                    "Assign",
                    1000,
                    "Improve",
                    1000,
                  ]}
                  repeat={Infinity}
                  className="font-mono font-bold text-[50px] m-0"
                />{" "}
                All your projects in one place
              </div>
              <div className="w-[80%] mb-[20px] text-gray-300">
                View plans, Track Progress, Increase Productivity and Improve
                Communication with Projectile
              </div>
              <div className="h-[11%] w-[70%] mb-[40px] bg-[rgb(59,59,59)] flex justify-center items-center rounded-[8px] font-semibold">
                <div className="w-[12%]">
                  <AiOutlineMail className="text-[30px] text-white ml-2" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="h-[80%] outline-none text-black pl-2"
                />
                <Link to="/signup">
                  <button className="w-[120px] h-[48px] bg-yellow-500 flex justify-center items-center rounded-lg ml-5">
                    Get Started
                  </button>
                </Link>
              </div>
              <div className="mb-[10px]">⭐⭐⭐⭐⭐</div>
              <div className="text-gray-300 mb-[20px]">
                "Easily the best project management software on the <br />{" "}
                market, right now."
              </div>
              <div className="text-white font-bold">
                Habeeb - <br />
                C.T.O FoodFlex
              </div>
            </div>
          </div>

          <div className="h-[100%] w-[47%]">
            <img src={hero} alt="" className="h-[60%] w-[80%]" />
          </div>
        </div>
      </section>

      <section className="h-[100vh] w-full bg-[rgb(16,25,53)]"></section>
    </div>
  );
};

export default Homepage;
