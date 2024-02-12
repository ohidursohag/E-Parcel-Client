import { Outlet } from "react-router-dom";
import SideBar from "../Components/DashBoard/SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <>
      <div className="relative min-h-screen ">
        {/* Side Bar */}
        <SideBar />
        <div className="flex-1 pt-10 lg:pt-0 lg:ml-[300px]">
          <div className=" ">
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
