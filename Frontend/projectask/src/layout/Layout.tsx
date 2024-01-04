import { Outlet } from "react-router-dom";
import Header from "../components/Headers/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
