import { useState } from "react";

const Pricing = () => {
  const [toggle, setToggle] = useState(true);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <section className="h-[calc(100vh-60px)] w-full bg-[#101935] mt-[70px] flex justify-center items-start">
        <div className="h-[90%] w-[85%] flex justify-center items-center flex-col pt-[120px]">
          <div className="w-[100%] text-white font-bold text-center mb-[40px]">
            <div className="text-[50px]">Simple Pricing</div>
            <div>
              {" "}
              We care about you! We have flexible pricing suited to your taste.
              So you can achieve more with us👍!
            </div>
          </div>

          <div className="w-[100%] text-black font-bold flex justify-center items-center flex-col gap-5">
            {toggle && toggle ? (
              <div
                onClick={onToggle}
                className="h-[60px] w-[20%] bg-white rounded-[25px] flex justify-start items-center"
              >
                <div
                  onClick={onToggle}
                  className="h-[70%] w-[48%] ml-2 border border-blue-700 bg-blue-700 flex justify-center items-center rounded-2xl text-[17px] text-black hover:cursor-pointer"
                >
                  Monthly Billing
                </div>
              </div>
            ) : (
              <div
                onClick={onToggle}
                className="h-[60px] w-[20%] bg-white rounded-[25px] flex justify-end items-center"
              >
                <div
                  onClick={onToggle}
                  className="h-[70%] w-[48%] mr-2 border border-[#c9fa75] flex justify-center items-center rounded-2xl bg-[#c9fa75] text-[17px] text-black hover:cursor-pointer"
                >
                  Yearly Billing
                </div>
              </div>
            )}
            <div className="w-[100%] flex justify-center items-center mt-[60px]">
              <div className="w-[80%] flex justify-center items-start border text-white">
                <div className="h-[100%] w-[35%] ">
                  <div className="w-[100%] border-b bt  py-[30px] pl-[40px] flex justify-center flex-col gap-4">
                    <h1 className="text-[23px]">Free</h1>
                    <h1 className="text-[45px]">{toggle ? "₦0" : "₦0"}</h1>
                    <h1 className="text-[23px]">
                      {toggle ? "Per Month" : "Per Year"}
                    </h1>
                  </div>
                  <div className="py-[60px]">
                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span> 3
                      Projects
                    </div>

                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span> 5
                      Tasks
                    </div>

                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span> 2
                      Alerts
                    </div>
                  </div>
                </div>

                <div className="h-[100%] w-[35%] border">
                  <div className="w-[100%] border-b bty  py-[30px] pl-[40px] flex justify-center flex-col gap-4">
                    <h1 className="text-[23px]">Pro</h1>
                    <h1 className="text-[45px]">
                      {toggle ? "₦2,000" : "₦20,000    "}
                    </h1>
                    <h1 className="text-[23px]">
                      {toggle ? "Per Month" : "Per Year"}
                    </h1>
                  </div>
                  <div className="py-[40px]">
                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span> 30
                      Projects
                    </div>

                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span> 50
                      Tasks
                    </div>

                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span> 60
                      Alerts
                    </div>

                    <button className="ml-[40px] mt-[40px] py-2 px-4 rounded-[8px] bg-[#ffd978] text-black text-[16px] font-[700] border border-[#ffd978    ]">
                      Get Started Now
                    </button>
                  </div>
                </div>

                <div className="h-[100%] w-[35%] border">
                  <div className="w-[100%] border-b btg  py-[30px] pl-[40px] flex justify-center flex-col gap-4">
                    <h1 className="text-[23px]">Exclusive</h1>
                    <h1 className="text-[45px]">
                      {toggle ? "₦5,000" : "₦60,000    "}
                    </h1>
                    <h1 className="text-[23px]">
                      {toggle ? "Per Month" : "Per Year"}
                    </h1>
                  </div>
                  <div className="py-[40px]">
                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span>{" "}
                      Unlimited Projects
                    </div>

                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span>{" "}
                      Unlimited Tasks
                    </div>

                    <div className="text-[30px] font-[300]">
                      <span className="text-green-400 ml-[10px]">✓</span>{" "}
                      Unlimited Alerts
                    </div>

                    <button className="ml-[40px] mt-[40px] py-2 px-4 rounded-[8px] bg-[#c9fa75] text-black text-[16px] font-[700] border border-[#c9fa75]">
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[20vh] w-full bg-[rgb(16,25,53)]">
        {/* <h1 className="font-bold text-[30px]"> {toggle ? "$14" : "$70"}</h1> */}
      </section>
    </div>
  );
};

export default Pricing;
