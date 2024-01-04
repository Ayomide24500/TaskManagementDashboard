import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/Headers/DashboardHeader";

import { FC } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Layout: FC = () => {
  const readToggle = useSelector((state: any): any => {
    return state.toggle;
  });
  return (
    <div>
      <Sidebar />
      <div className="w-full flex justify-end">
        <div
          className={`transition-all duration-300`}
          style={{
            width: `${readToggle ? "calc(100% - 240px)" : "calc(100% - 70px)"}`,
          }}
        >
          <DashboardHeader />
          <div className="m-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
