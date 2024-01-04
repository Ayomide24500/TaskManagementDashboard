const AllTaskView = () => {
  return (
    <div>
      <div
        style={{
          height: "355px",
          width: "97%",
          overflowY: "auto",
          scrollbarWidth: "thin",
          gap: "9px",
          marginLeft: "25px",
          background: "rgba(14, 14, 14, 0.7)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: "10px",
        }}
      >
        <div className="py-6 px-6 display flex justify-center items-center flex-col gap-3">
          <div
            className="h-[70px] w-[70px] bg-gray-300"
            style={{ borderRadius: "100%" }}
          ></div>
          <p className="font-bold text-xl text-white">Task List</p>
          <div className="min-h-1 w-full flex justify-center items-center flex-col gap-11 ">
            <div className="border-b gap-4 border-b-white w-full h-[60px] flex justify-between items-center text-white">
              <h1>Team Member</h1>
              <h1>Tasks</h1>
              <h1>status</h1>
              <div className="pr-3">Delete</div>
            </div>
            <div className="border-b gap-4 border-b-white w-full h-[60px]"></div>
            <div className="border-b gap-4 border-b-white w-full h-[60px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTaskView;
